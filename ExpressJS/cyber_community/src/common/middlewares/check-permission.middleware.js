import { BadRequestException } from "../helpers/exception.helper";
import prisma from "../prisma/init.prisma";

export const checkPermission = async (req, res, next) => {
    // đảm bảo có user
    const user = req?.user;
    if (!user) {
        console.log(`User not found in protect`);
        throw new BadRequestException("User Not Found");
    }

    // console.log({user});

    // role admin thì cho qua
    if (user.roleId === 1) {
        next();
        return;
    }

    // method
    const method = req.method;
    // endpoint
    // /api/auth + /get-info
    const endpoint = req.baseUrl + req.route?.path;

    // tham khảo
    // const permission = await prisma.permissions.findFirst({
    //     where: {
    //         endpoint: endpoint,
    //         method: method,
    //     },
    // });

    const rolePermissionExist = await prisma.rolePermission.findFirst({
        where: {
            roleId: user.roleId,
            // permissionId: permission.id, // // tham khảo
            Permissions: {
                endpoint: endpoint,
                method: method,
            },
            isActive: true,
        },
    });

    if (!rolePermissionExist) {
        throw new BadRequestException("User not permission");
    }

    // console.log({ user, method, endpoint, rolePermissionExist });

    next();
};
