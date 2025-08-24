
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Articles
 * 
 */
export type Articles = $Result.DefaultSelection<Prisma.$ArticlesPayload>
/**
 * Model Permissions
 * 
 */
export type Permissions = $Result.DefaultSelection<Prisma.$PermissionsPayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model ChatGroupMembers
 * 
 */
export type ChatGroupMembers = $Result.DefaultSelection<Prisma.$ChatGroupMembersPayload>
/**
 * Model ChatGroups
 * 
 */
export type ChatGroups = $Result.DefaultSelection<Prisma.$ChatGroupsPayload>
/**
 * Model ChatMessages
 * 
 */
export type ChatMessages = $Result.DefaultSelection<Prisma.$ChatMessagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.articles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.articles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.articles`: Exposes CRUD operations for the **Articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.ArticlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissions`: Exposes CRUD operations for the **Permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permissions.findMany()
    * ```
    */
  get permissions(): Prisma.PermissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroupMembers`: Exposes CRUD operations for the **ChatGroupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroupMembers
    * const chatGroupMembers = await prisma.chatGroupMembers.findMany()
    * ```
    */
  get chatGroupMembers(): Prisma.ChatGroupMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroups`: Exposes CRUD operations for the **ChatGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroups.findMany()
    * ```
    */
  get chatGroups(): Prisma.ChatGroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessages`: Exposes CRUD operations for the **ChatMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessages.findMany()
    * ```
    */
  get chatMessages(): Prisma.ChatMessagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Articles: 'Articles',
    Permissions: 'Permissions',
    RolePermission: 'RolePermission',
    Roles: 'Roles',
    Users: 'Users',
    ChatGroupMembers: 'ChatGroupMembers',
    ChatGroups: 'ChatGroups',
    ChatMessages: 'ChatMessages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "articles" | "permissions" | "rolePermission" | "roles" | "users" | "chatGroupMembers" | "chatGroups" | "chatMessages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Articles: {
        payload: Prisma.$ArticlesPayload<ExtArgs>
        fields: Prisma.ArticlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findFirst: {
            args: Prisma.ArticlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findMany: {
            args: Prisma.ArticlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          create: {
            args: Prisma.ArticlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          createMany: {
            args: Prisma.ArticlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          update: {
            args: Prisma.ArticlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          deleteMany: {
            args: Prisma.ArticlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.ArticlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      Permissions: {
        payload: Prisma.$PermissionsPayload<ExtArgs>
        fields: Prisma.PermissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          findFirst: {
            args: Prisma.PermissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          findMany: {
            args: Prisma.PermissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>[]
          }
          create: {
            args: Prisma.PermissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          createMany: {
            args: Prisma.PermissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          update: {
            args: Prisma.PermissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          deleteMany: {
            args: Prisma.PermissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          aggregate: {
            args: Prisma.PermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissions>
          }
          groupBy: {
            args: Prisma.PermissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionsCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionsCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      ChatGroupMembers: {
        payload: Prisma.$ChatGroupMembersPayload<ExtArgs>
        fields: Prisma.ChatGroupMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          findMany: {
            args: Prisma.ChatGroupMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>[]
          }
          create: {
            args: Prisma.ChatGroupMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          createMany: {
            args: Prisma.ChatGroupMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          update: {
            args: Prisma.ChatGroupMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroupMembers>
          }
          groupBy: {
            args: Prisma.ChatGroupMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupMembersCountAggregateOutputType> | number
          }
        }
      }
      ChatGroups: {
        payload: Prisma.$ChatGroupsPayload<ExtArgs>
        fields: Prisma.ChatGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          findMany: {
            args: Prisma.ChatGroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>[]
          }
          create: {
            args: Prisma.ChatGroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          createMany: {
            args: Prisma.ChatGroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          update: {
            args: Prisma.ChatGroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroups>
          }
          groupBy: {
            args: Prisma.ChatGroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupsCountAggregateOutputType> | number
          }
        }
      }
      ChatMessages: {
        payload: Prisma.$ChatMessagesPayload<ExtArgs>
        fields: Prisma.ChatMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findFirst: {
            args: Prisma.ChatMessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findMany: {
            args: Prisma.ChatMessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>[]
          }
          create: {
            args: Prisma.ChatMessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          createMany: {
            args: Prisma.ChatMessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatMessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          update: {
            args: Prisma.ChatMessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          deleteMany: {
            args: Prisma.ChatMessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          aggregate: {
            args: Prisma.ChatMessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessages>
          }
          groupBy: {
            args: Prisma.ChatMessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessagesCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    articles?: ArticlesOmit
    permissions?: PermissionsOmit
    rolePermission?: RolePermissionOmit
    roles?: RolesOmit
    users?: UsersOmit
    chatGroupMembers?: ChatGroupMembersOmit
    chatGroups?: ChatGroupsOmit
    chatMessages?: ChatMessagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PermissionsCountOutputType
   */

  export type PermissionsCountOutputType = {
    RolePermission: number
  }

  export type PermissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | PermissionsCountOutputTypeCountRolePermissionArgs
  }

  // Custom InputTypes
  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionsCountOutputType
     */
    select?: PermissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    RolePermission: number
    Users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | RolesCountOutputTypeCountRolePermissionArgs
    Users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountRolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    ChatGroupMembers: number
    ChatGroups: number
    ChatMessages: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | UsersCountOutputTypeCountChatGroupMembersArgs
    ChatGroups?: boolean | UsersCountOutputTypeCountChatGroupsArgs
    ChatMessages?: boolean | UsersCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }


  /**
   * Count Type ChatGroupsCountOutputType
   */

  export type ChatGroupsCountOutputType = {
    ChatGroupMembers: number
    ChatMessages: number
  }

  export type ChatGroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | ChatGroupsCountOutputTypeCountChatGroupMembersArgs
    ChatMessages?: boolean | ChatGroupsCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupsCountOutputType
     */
    select?: ChatGroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeCountChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupMembersWhereInput
  }

  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    views: number
    userId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    id?: true
    views?: true
    userId?: true
    deletedBy?: true
  }

  export type ArticlesSumAggregateInputType = {
    id?: true
    views?: true
    userId?: true
    deletedBy?: true
  }

  export type ArticlesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to aggregate.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithAggregationInput | ArticlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: ArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: number
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number
    userId: number
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type ArticlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articles"]>



  export type ArticlesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageUrl" | "views" | "userId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["articles"]>

  export type $ArticlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      content: string | null
      imageUrl: string | null
      views: number
      userId: number
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type ArticlesGetPayload<S extends boolean | null | undefined | ArticlesDefaultArgs> = $Result.GetResult<Prisma.$ArticlesPayload, S>

  type ArticlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface ArticlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articles'], meta: { name: 'Articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {ArticlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticlesFindUniqueArgs>(args: SelectSubset<T, ArticlesFindUniqueArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticlesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticlesFindFirstArgs>(args?: SelectSubset<T, ArticlesFindFirstArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticlesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticlesFindManyArgs>(args?: SelectSubset<T, ArticlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {ArticlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends ArticlesCreateArgs>(args: SelectSubset<T, ArticlesCreateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticlesCreateManyArgs>(args?: SelectSubset<T, ArticlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {ArticlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends ArticlesDeleteArgs>(args: SelectSubset<T, ArticlesDeleteArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {ArticlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticlesUpdateArgs>(args: SelectSubset<T, ArticlesUpdateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticlesDeleteManyArgs>(args?: SelectSubset<T, ArticlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticlesUpdateManyArgs>(args: SelectSubset<T, ArticlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {ArticlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends ArticlesUpsertArgs>(args: SelectSubset<T, ArticlesUpsertArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticlesCountArgs>(
      args?: Subset<T, ArticlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articles model
   */
  readonly fields: ArticlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Articles model
   */
  interface ArticlesFieldRefs {
    readonly id: FieldRef<"Articles", 'Int'>
    readonly title: FieldRef<"Articles", 'String'>
    readonly content: FieldRef<"Articles", 'String'>
    readonly imageUrl: FieldRef<"Articles", 'String'>
    readonly views: FieldRef<"Articles", 'Int'>
    readonly userId: FieldRef<"Articles", 'Int'>
    readonly deletedBy: FieldRef<"Articles", 'Int'>
    readonly isDeleted: FieldRef<"Articles", 'Boolean'>
    readonly deletedAt: FieldRef<"Articles", 'DateTime'>
    readonly createdAt: FieldRef<"Articles", 'DateTime'>
    readonly updatedAt: FieldRef<"Articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Articles findUnique
   */
  export type ArticlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findUniqueOrThrow
   */
  export type ArticlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findFirst
   */
  export type ArticlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findFirstOrThrow
   */
  export type ArticlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findMany
   */
  export type ArticlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles create
   */
  export type ArticlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data needed to create a Articles.
     */
    data: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
  }

  /**
   * Articles createMany
   */
  export type ArticlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articles update
   */
  export type ArticlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data needed to update a Articles.
     */
    data: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
    /**
     * Choose, which Articles to update.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles updateMany
   */
  export type ArticlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Articles upsert
   */
  export type ArticlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The filter to search for the Articles to update in case it exists.
     */
    where: ArticlesWhereUniqueInput
    /**
     * In case the Articles found by the `where` argument doesn't exist, create a new Articles with this data.
     */
    create: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
    /**
     * In case the Articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
  }

  /**
   * Articles delete
   */
  export type ArticlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter which Articles to delete.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles deleteMany
   */
  export type ArticlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Articles without action
   */
  export type ArticlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
  }


  /**
   * Model Permissions
   */

  export type AggregatePermissions = {
    _count: PermissionsCountAggregateOutputType | null
    _avg: PermissionsAvgAggregateOutputType | null
    _sum: PermissionsSumAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  export type PermissionsAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type PermissionsSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type PermissionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    endpoint: string | null
    method: string | null
    module: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    endpoint: string | null
    method: string | null
    module: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionsCountAggregateOutputType = {
    id: number
    name: number
    endpoint: number
    method: number
    module: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionsAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type PermissionsSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type PermissionsMinAggregateInputType = {
    id?: true
    name?: true
    endpoint?: true
    method?: true
    module?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionsMaxAggregateInputType = {
    id?: true
    name?: true
    endpoint?: true
    method?: true
    module?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionsCountAggregateInputType = {
    id?: true
    name?: true
    endpoint?: true
    method?: true
    module?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to aggregate.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionsMaxAggregateInputType
  }

  export type GetPermissionsAggregateType<T extends PermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissions[P]>
      : GetScalarType<T[P], AggregatePermissions[P]>
  }




  export type PermissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionsWhereInput
    orderBy?: PermissionsOrderByWithAggregationInput | PermissionsOrderByWithAggregationInput[]
    by: PermissionsScalarFieldEnum[] | PermissionsScalarFieldEnum
    having?: PermissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionsCountAggregateInputType | true
    _avg?: PermissionsAvgAggregateInputType
    _sum?: PermissionsSumAggregateInputType
    _min?: PermissionsMinAggregateInputType
    _max?: PermissionsMaxAggregateInputType
  }

  export type PermissionsGroupByOutputType = {
    id: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: PermissionsCountAggregateOutputType | null
    _avg: PermissionsAvgAggregateOutputType | null
    _sum: PermissionsSumAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  type GetPermissionsGroupByPayload<T extends PermissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
        }
      >
    >


  export type PermissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    endpoint?: boolean
    method?: boolean
    module?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RolePermission?: boolean | Permissions$RolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissions"]>



  export type PermissionsSelectScalar = {
    id?: boolean
    name?: boolean
    endpoint?: boolean
    method?: boolean
    module?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "endpoint" | "method" | "module" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["permissions"]>
  export type PermissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | Permissions$RolePermissionArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PermissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissions"
    objects: {
      RolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      endpoint: string
      method: string
      module: string
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permissions"]>
    composites: {}
  }

  type PermissionsGetPayload<S extends boolean | null | undefined | PermissionsDefaultArgs> = $Result.GetResult<Prisma.$PermissionsPayload, S>

  type PermissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionsCountAggregateInputType | true
    }

  export interface PermissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissions'], meta: { name: 'Permissions' } }
    /**
     * Find zero or one Permissions that matches the filter.
     * @param {PermissionsFindUniqueArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionsFindUniqueArgs>(args: SelectSubset<T, PermissionsFindUniqueArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionsFindUniqueOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindFirstArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionsFindFirstArgs>(args?: SelectSubset<T, PermissionsFindFirstArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindFirstOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permissions.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionsWithIdOnly = await prisma.permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionsFindManyArgs>(args?: SelectSubset<T, PermissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissions.
     * @param {PermissionsCreateArgs} args - Arguments to create a Permissions.
     * @example
     * // Create one Permissions
     * const Permissions = await prisma.permissions.create({
     *   data: {
     *     // ... data to create a Permissions
     *   }
     * })
     * 
     */
    create<T extends PermissionsCreateArgs>(args: SelectSubset<T, PermissionsCreateArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionsCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionsCreateManyArgs>(args?: SelectSubset<T, PermissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permissions.
     * @param {PermissionsDeleteArgs} args - Arguments to delete one Permissions.
     * @example
     * // Delete one Permissions
     * const Permissions = await prisma.permissions.delete({
     *   where: {
     *     // ... filter to delete one Permissions
     *   }
     * })
     * 
     */
    delete<T extends PermissionsDeleteArgs>(args: SelectSubset<T, PermissionsDeleteArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissions.
     * @param {PermissionsUpdateArgs} args - Arguments to update one Permissions.
     * @example
     * // Update one Permissions
     * const permissions = await prisma.permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionsUpdateArgs>(args: SelectSubset<T, PermissionsUpdateArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionsDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionsDeleteManyArgs>(args?: SelectSubset<T, PermissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionsUpdateManyArgs>(args: SelectSubset<T, PermissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permissions.
     * @param {PermissionsUpsertArgs} args - Arguments to update or create a Permissions.
     * @example
     * // Update or create a Permissions
     * const permissions = await prisma.permissions.upsert({
     *   create: {
     *     // ... data to create a Permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissions we want to update
     *   }
     * })
     */
    upsert<T extends PermissionsUpsertArgs>(args: SelectSubset<T, PermissionsUpsertArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permissions.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionsCountArgs>(
      args?: Subset<T, PermissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionsAggregateArgs>(args: Subset<T, PermissionsAggregateArgs>): Prisma.PrismaPromise<GetPermissionsAggregateType<T>>

    /**
     * Group by Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionsGroupByArgs['orderBy'] }
        : { orderBy?: PermissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissions model
   */
  readonly fields: PermissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RolePermission<T extends Permissions$RolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Permissions$RolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permissions model
   */
  interface PermissionsFieldRefs {
    readonly id: FieldRef<"Permissions", 'Int'>
    readonly name: FieldRef<"Permissions", 'String'>
    readonly endpoint: FieldRef<"Permissions", 'String'>
    readonly method: FieldRef<"Permissions", 'String'>
    readonly module: FieldRef<"Permissions", 'String'>
    readonly deletedBy: FieldRef<"Permissions", 'Int'>
    readonly isDeleted: FieldRef<"Permissions", 'Boolean'>
    readonly deletedAt: FieldRef<"Permissions", 'DateTime'>
    readonly createdAt: FieldRef<"Permissions", 'DateTime'>
    readonly updatedAt: FieldRef<"Permissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permissions findUnique
   */
  export type PermissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions findUniqueOrThrow
   */
  export type PermissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions findFirst
   */
  export type PermissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions findFirstOrThrow
   */
  export type PermissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions findMany
   */
  export type PermissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions create
   */
  export type PermissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissions.
     */
    data: XOR<PermissionsCreateInput, PermissionsUncheckedCreateInput>
  }

  /**
   * Permissions createMany
   */
  export type PermissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionsCreateManyInput | PermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissions update
   */
  export type PermissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissions.
     */
    data: XOR<PermissionsUpdateInput, PermissionsUncheckedUpdateInput>
    /**
     * Choose, which Permissions to update.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions updateMany
   */
  export type PermissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionsUpdateManyMutationInput, PermissionsUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionsWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permissions upsert
   */
  export type PermissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissions to update in case it exists.
     */
    where: PermissionsWhereUniqueInput
    /**
     * In case the Permissions found by the `where` argument doesn't exist, create a new Permissions with this data.
     */
    create: XOR<PermissionsCreateInput, PermissionsUncheckedCreateInput>
    /**
     * In case the Permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionsUpdateInput, PermissionsUncheckedUpdateInput>
  }

  /**
   * Permissions delete
   */
  export type PermissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter which Permissions to delete.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions deleteMany
   */
  export type PermissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionsWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permissions.RolePermission
   */
  export type Permissions$RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permissions without action
   */
  export type PermissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    deletedBy: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    deletedBy: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    isActive: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    deletedBy?: true
  }

  export type RolePermissionSumAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    deletedBy?: true
  }

  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: number
    roleId: number
    permissionId: number
    isActive: boolean | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    Permissions?: boolean | PermissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>



  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "permissionId" | "isActive" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    Permissions?: boolean | PermissionsDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      Roles: Prisma.$RolesPayload<ExtArgs>
      Permissions: Prisma.$PermissionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      permissionId: number
      isActive: boolean | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Roles<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Permissions<T extends PermissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionsDefaultArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'Int'>
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
    readonly isActive: FieldRef<"RolePermission", 'Boolean'>
    readonly deletedBy: FieldRef<"RolePermission", 'Int'>
    readonly isDeleted: FieldRef<"RolePermission", 'Boolean'>
    readonly deletedAt: FieldRef<"RolePermission", 'DateTime'>
    readonly createdAt: FieldRef<"RolePermission", 'DateTime'>
    readonly updatedAt: FieldRef<"RolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    isActive: boolean | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RolePermission?: boolean | Roles$RolePermissionArgs<ExtArgs>
    Users?: boolean | Roles$UsersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermission?: boolean | Roles$RolePermissionArgs<ExtArgs>
    Users?: boolean | Roles$UsersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      RolePermission: Prisma.$RolePermissionPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      isActive: boolean | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RolePermission<T extends Roles$RolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Roles$RolePermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Roles$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly description: FieldRef<"Roles", 'String'>
    readonly isActive: FieldRef<"Roles", 'Boolean'>
    readonly deletedBy: FieldRef<"Roles", 'Int'>
    readonly isDeleted: FieldRef<"Roles", 'Boolean'>
    readonly deletedAt: FieldRef<"Roles", 'DateTime'>
    readonly createdAt: FieldRef<"Roles", 'DateTime'>
    readonly updatedAt: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data?: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.RolePermission
   */
  export type Roles$RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Roles.Users
   */
  export type Roles$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    deletedBy: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    deletedBy: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    avatar: string | null
    password: string | null
    facebookId: string | null
    googleId: string | null
    roleId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    avatar: string | null
    password: string | null
    facebookId: string | null
    googleId: string | null
    roleId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    avatar: number
    password: number
    facebookId: number
    googleId: number
    roleId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    roleId?: true
    deletedBy?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    roleId?: true
    deletedBy?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    password?: true
    facebookId?: true
    googleId?: true
    roleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    password?: true
    facebookId?: true
    googleId?: true
    roleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    password?: true
    facebookId?: true
    googleId?: true
    roleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    fullName: string | null
    avatar: string | null
    password: string | null
    facebookId: string | null
    googleId: string | null
    roleId: number
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatar?: boolean
    password?: boolean
    facebookId?: boolean
    googleId?: boolean
    roleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ChatGroupMembers?: boolean | Users$ChatGroupMembersArgs<ExtArgs>
    ChatGroups?: boolean | Users$ChatGroupsArgs<ExtArgs>
    ChatMessages?: boolean | Users$ChatMessagesArgs<ExtArgs>
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatar?: boolean
    password?: boolean
    facebookId?: boolean
    googleId?: boolean
    roleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "avatar" | "password" | "facebookId" | "googleId" | "roleId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | Users$ChatGroupMembersArgs<ExtArgs>
    ChatGroups?: boolean | Users$ChatGroupsArgs<ExtArgs>
    ChatMessages?: boolean | Users$ChatMessagesArgs<ExtArgs>
    Roles?: boolean | RolesDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      ChatGroupMembers: Prisma.$ChatGroupMembersPayload<ExtArgs>[]
      ChatGroups: Prisma.$ChatGroupsPayload<ExtArgs>[]
      ChatMessages: Prisma.$ChatMessagesPayload<ExtArgs>[]
      Roles: Prisma.$RolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fullName: string | null
      avatar: string | null
      password: string | null
      facebookId: string | null
      googleId: string | null
      roleId: number
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatGroupMembers<T extends Users$ChatGroupMembersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ChatGroupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatGroups<T extends Users$ChatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ChatGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatMessages<T extends Users$ChatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$ChatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Roles<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly facebookId: FieldRef<"Users", 'String'>
    readonly googleId: FieldRef<"Users", 'String'>
    readonly roleId: FieldRef<"Users", 'Int'>
    readonly deletedBy: FieldRef<"Users", 'Int'>
    readonly isDeleted: FieldRef<"Users", 'Boolean'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.ChatGroupMembers
   */
  export type Users$ChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    where?: ChatGroupMembersWhereInput
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    cursor?: ChatGroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * Users.ChatGroups
   */
  export type Users$ChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    where?: ChatGroupsWhereInput
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    cursor?: ChatGroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * Users.ChatMessages
   */
  export type Users$ChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroupMembers
   */

  export type AggregateChatGroupMembers = {
    _count: ChatGroupMembersCountAggregateOutputType | null
    _avg: ChatGroupMembersAvgAggregateOutputType | null
    _sum: ChatGroupMembersSumAggregateOutputType | null
    _min: ChatGroupMembersMinAggregateOutputType | null
    _max: ChatGroupMembersMaxAggregateOutputType | null
  }

  export type ChatGroupMembersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatGroupMembersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatGroupMembersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMembersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMembersCountAggregateOutputType = {
    id: number
    userId: number
    chatGroupId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupMembersAvgAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatGroupMembersSumAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatGroupMembersMinAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMembersMaxAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMembersCountAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroupMembers to aggregate.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroupMembers
    **/
    _count?: true | ChatGroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupMembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupMembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMembersMaxAggregateInputType
  }

  export type GetChatGroupMembersAggregateType<T extends ChatGroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroupMembers[P]>
      : GetScalarType<T[P], AggregateChatGroupMembers[P]>
  }




  export type ChatGroupMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupMembersWhereInput
    orderBy?: ChatGroupMembersOrderByWithAggregationInput | ChatGroupMembersOrderByWithAggregationInput[]
    by: ChatGroupMembersScalarFieldEnum[] | ChatGroupMembersScalarFieldEnum
    having?: ChatGroupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupMembersCountAggregateInputType | true
    _avg?: ChatGroupMembersAvgAggregateInputType
    _sum?: ChatGroupMembersSumAggregateInputType
    _min?: ChatGroupMembersMinAggregateInputType
    _max?: ChatGroupMembersMaxAggregateInputType
  }

  export type ChatGroupMembersGroupByOutputType = {
    id: number
    userId: number | null
    chatGroupId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupMembersCountAggregateOutputType | null
    _avg: ChatGroupMembersAvgAggregateOutputType | null
    _sum: ChatGroupMembersSumAggregateOutputType | null
    _min: ChatGroupMembersMinAggregateOutputType | null
    _max: ChatGroupMembersMaxAggregateOutputType | null
  }

  type GetChatGroupMembersGroupByPayload<T extends ChatGroupMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupMembersGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | ChatGroupMembers$UsersArgs<ExtArgs>
    ChatGroups?: boolean | ChatGroupMembers$ChatGroupsArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroupMembers"]>



  export type ChatGroupMembersSelectScalar = {
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGroupMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatGroupId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatGroupMembers"]>
  export type ChatGroupMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | ChatGroupMembers$UsersArgs<ExtArgs>
    ChatGroups?: boolean | ChatGroupMembers$ChatGroupsArgs<ExtArgs>
  }

  export type $ChatGroupMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroupMembers"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      ChatGroups: Prisma.$ChatGroupsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      chatGroupId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroupMembers"]>
    composites: {}
  }

  type ChatGroupMembersGetPayload<S extends boolean | null | undefined | ChatGroupMembersDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupMembersPayload, S>

  type ChatGroupMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupMembersCountAggregateInputType | true
    }

  export interface ChatGroupMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroupMembers'], meta: { name: 'ChatGroupMembers' } }
    /**
     * Find zero or one ChatGroupMembers that matches the filter.
     * @param {ChatGroupMembersFindUniqueArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupMembersFindUniqueArgs>(args: SelectSubset<T, ChatGroupMembersFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroupMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupMembersFindUniqueOrThrowArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersFindFirstArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupMembersFindFirstArgs>(args?: SelectSubset<T, ChatGroupMembersFindFirstArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersFindFirstOrThrowArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findMany()
     * 
     * // Get first 10 ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupMembersWithIdOnly = await prisma.chatGroupMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupMembersFindManyArgs>(args?: SelectSubset<T, ChatGroupMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroupMembers.
     * @param {ChatGroupMembersCreateArgs} args - Arguments to create a ChatGroupMembers.
     * @example
     * // Create one ChatGroupMembers
     * const ChatGroupMembers = await prisma.chatGroupMembers.create({
     *   data: {
     *     // ... data to create a ChatGroupMembers
     *   }
     * })
     * 
     */
    create<T extends ChatGroupMembersCreateArgs>(args: SelectSubset<T, ChatGroupMembersCreateArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroupMembers.
     * @param {ChatGroupMembersCreateManyArgs} args - Arguments to create many ChatGroupMembers.
     * @example
     * // Create many ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupMembersCreateManyArgs>(args?: SelectSubset<T, ChatGroupMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroupMembers.
     * @param {ChatGroupMembersDeleteArgs} args - Arguments to delete one ChatGroupMembers.
     * @example
     * // Delete one ChatGroupMembers
     * const ChatGroupMembers = await prisma.chatGroupMembers.delete({
     *   where: {
     *     // ... filter to delete one ChatGroupMembers
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupMembersDeleteArgs>(args: SelectSubset<T, ChatGroupMembersDeleteArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroupMembers.
     * @param {ChatGroupMembersUpdateArgs} args - Arguments to update one ChatGroupMembers.
     * @example
     * // Update one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupMembersUpdateArgs>(args: SelectSubset<T, ChatGroupMembersUpdateArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroupMembers.
     * @param {ChatGroupMembersDeleteManyArgs} args - Arguments to filter ChatGroupMembers to delete.
     * @example
     * // Delete a few ChatGroupMembers
     * const { count } = await prisma.chatGroupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupMembersDeleteManyArgs>(args?: SelectSubset<T, ChatGroupMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupMembersUpdateManyArgs>(args: SelectSubset<T, ChatGroupMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroupMembers.
     * @param {ChatGroupMembersUpsertArgs} args - Arguments to update or create a ChatGroupMembers.
     * @example
     * // Update or create a ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.upsert({
     *   create: {
     *     // ... data to create a ChatGroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroupMembers we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupMembersUpsertArgs>(args: SelectSubset<T, ChatGroupMembersUpsertArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersCountArgs} args - Arguments to filter ChatGroupMembers to count.
     * @example
     * // Count the number of ChatGroupMembers
     * const count = await prisma.chatGroupMembers.count({
     *   where: {
     *     // ... the filter for the ChatGroupMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupMembersCountArgs>(
      args?: Subset<T, ChatGroupMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGroupMembersAggregateArgs>(args: Subset<T, ChatGroupMembersAggregateArgs>): Prisma.PrismaPromise<GetChatGroupMembersAggregateType<T>>

    /**
     * Group by ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupMembersGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroupMembers model
   */
  readonly fields: ChatGroupMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends ChatGroupMembers$UsersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupMembers$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ChatGroups<T extends ChatGroupMembers$ChatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupMembers$ChatGroupsArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatGroupMembers model
   */
  interface ChatGroupMembersFieldRefs {
    readonly id: FieldRef<"ChatGroupMembers", 'Int'>
    readonly userId: FieldRef<"ChatGroupMembers", 'Int'>
    readonly chatGroupId: FieldRef<"ChatGroupMembers", 'Int'>
    readonly deletedBy: FieldRef<"ChatGroupMembers", 'Int'>
    readonly isDeleted: FieldRef<"ChatGroupMembers", 'Boolean'>
    readonly deletedAt: FieldRef<"ChatGroupMembers", 'DateTime'>
    readonly createdAt: FieldRef<"ChatGroupMembers", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGroupMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroupMembers findUnique
   */
  export type ChatGroupMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers findUniqueOrThrow
   */
  export type ChatGroupMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers findFirst
   */
  export type ChatGroupMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroupMembers.
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroupMembers findFirstOrThrow
   */
  export type ChatGroupMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroupMembers.
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroupMembers findMany
   */
  export type ChatGroupMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroupMembers.
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroupMembers create
   */
  export type ChatGroupMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroupMembers.
     */
    data?: XOR<ChatGroupMembersCreateInput, ChatGroupMembersUncheckedCreateInput>
  }

  /**
   * ChatGroupMembers createMany
   */
  export type ChatGroupMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroupMembers.
     */
    data: ChatGroupMembersCreateManyInput | ChatGroupMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatGroupMembers update
   */
  export type ChatGroupMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroupMembers.
     */
    data: XOR<ChatGroupMembersUpdateInput, ChatGroupMembersUncheckedUpdateInput>
    /**
     * Choose, which ChatGroupMembers to update.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers updateMany
   */
  export type ChatGroupMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroupMembers.
     */
    data: XOR<ChatGroupMembersUpdateManyMutationInput, ChatGroupMembersUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroupMembers to update
     */
    where?: ChatGroupMembersWhereInput
    /**
     * Limit how many ChatGroupMembers to update.
     */
    limit?: number
  }

  /**
   * ChatGroupMembers upsert
   */
  export type ChatGroupMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroupMembers to update in case it exists.
     */
    where: ChatGroupMembersWhereUniqueInput
    /**
     * In case the ChatGroupMembers found by the `where` argument doesn't exist, create a new ChatGroupMembers with this data.
     */
    create: XOR<ChatGroupMembersCreateInput, ChatGroupMembersUncheckedCreateInput>
    /**
     * In case the ChatGroupMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupMembersUpdateInput, ChatGroupMembersUncheckedUpdateInput>
  }

  /**
   * ChatGroupMembers delete
   */
  export type ChatGroupMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter which ChatGroupMembers to delete.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers deleteMany
   */
  export type ChatGroupMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroupMembers to delete
     */
    where?: ChatGroupMembersWhereInput
    /**
     * Limit how many ChatGroupMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatGroupMembers.Users
   */
  export type ChatGroupMembers$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * ChatGroupMembers.ChatGroups
   */
  export type ChatGroupMembers$ChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    where?: ChatGroupsWhereInput
  }

  /**
   * ChatGroupMembers without action
   */
  export type ChatGroupMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroups
   */

  export type AggregateChatGroups = {
    _count: ChatGroupsCountAggregateOutputType | null
    _avg: ChatGroupsAvgAggregateOutputType | null
    _sum: ChatGroupsSumAggregateOutputType | null
    _min: ChatGroupsMinAggregateOutputType | null
    _max: ChatGroupsMaxAggregateOutputType | null
  }

  export type ChatGroupsAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatGroupsSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatGroupsMinAggregateOutputType = {
    id: number | null
    keyForChatOne: string | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupsMaxAggregateOutputType = {
    id: number | null
    keyForChatOne: string | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupsCountAggregateOutputType = {
    id: number
    keyForChatOne: number
    name: number
    ownerId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupsAvgAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatGroupsSumAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatGroupsMinAggregateInputType = {
    id?: true
    keyForChatOne?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupsMaxAggregateInputType = {
    id?: true
    keyForChatOne?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupsCountAggregateInputType = {
    id?: true
    keyForChatOne?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to aggregate.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupsMaxAggregateInputType
  }

  export type GetChatGroupsAggregateType<T extends ChatGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroups[P]>
      : GetScalarType<T[P], AggregateChatGroups[P]>
  }




  export type ChatGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupsWhereInput
    orderBy?: ChatGroupsOrderByWithAggregationInput | ChatGroupsOrderByWithAggregationInput[]
    by: ChatGroupsScalarFieldEnum[] | ChatGroupsScalarFieldEnum
    having?: ChatGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupsCountAggregateInputType | true
    _avg?: ChatGroupsAvgAggregateInputType
    _sum?: ChatGroupsSumAggregateInputType
    _min?: ChatGroupsMinAggregateInputType
    _max?: ChatGroupsMaxAggregateInputType
  }

  export type ChatGroupsGroupByOutputType = {
    id: number
    keyForChatOne: string | null
    name: string | null
    ownerId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupsCountAggregateOutputType | null
    _avg: ChatGroupsAvgAggregateOutputType | null
    _sum: ChatGroupsSumAggregateOutputType | null
    _min: ChatGroupsMinAggregateOutputType | null
    _max: ChatGroupsMaxAggregateOutputType | null
  }

  type GetChatGroupsGroupByPayload<T extends ChatGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupsGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyForChatOne?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ChatGroupMembers?: boolean | ChatGroups$ChatGroupMembersArgs<ExtArgs>
    Users?: boolean | ChatGroups$UsersArgs<ExtArgs>
    ChatMessages?: boolean | ChatGroups$ChatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroups"]>



  export type ChatGroupsSelectScalar = {
    id?: boolean
    keyForChatOne?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyForChatOne" | "name" | "ownerId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatGroups"]>
  export type ChatGroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | ChatGroups$ChatGroupMembersArgs<ExtArgs>
    Users?: boolean | ChatGroups$UsersArgs<ExtArgs>
    ChatMessages?: boolean | ChatGroups$ChatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroups"
    objects: {
      ChatGroupMembers: Prisma.$ChatGroupMembersPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs> | null
      ChatMessages: Prisma.$ChatMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyForChatOne: string | null
      name: string | null
      ownerId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroups"]>
    composites: {}
  }

  type ChatGroupsGetPayload<S extends boolean | null | undefined | ChatGroupsDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupsPayload, S>

  type ChatGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupsCountAggregateInputType | true
    }

  export interface ChatGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroups'], meta: { name: 'ChatGroups' } }
    /**
     * Find zero or one ChatGroups that matches the filter.
     * @param {ChatGroupsFindUniqueArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupsFindUniqueArgs>(args: SelectSubset<T, ChatGroupsFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupsFindUniqueOrThrowArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsFindFirstArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupsFindFirstArgs>(args?: SelectSubset<T, ChatGroupsFindFirstArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsFindFirstOrThrowArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroups.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupsWithIdOnly = await prisma.chatGroups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupsFindManyArgs>(args?: SelectSubset<T, ChatGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroups.
     * @param {ChatGroupsCreateArgs} args - Arguments to create a ChatGroups.
     * @example
     * // Create one ChatGroups
     * const ChatGroups = await prisma.chatGroups.create({
     *   data: {
     *     // ... data to create a ChatGroups
     *   }
     * })
     * 
     */
    create<T extends ChatGroupsCreateArgs>(args: SelectSubset<T, ChatGroupsCreateArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {ChatGroupsCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroups = await prisma.chatGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupsCreateManyArgs>(args?: SelectSubset<T, ChatGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroups.
     * @param {ChatGroupsDeleteArgs} args - Arguments to delete one ChatGroups.
     * @example
     * // Delete one ChatGroups
     * const ChatGroups = await prisma.chatGroups.delete({
     *   where: {
     *     // ... filter to delete one ChatGroups
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupsDeleteArgs>(args: SelectSubset<T, ChatGroupsDeleteArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroups.
     * @param {ChatGroupsUpdateArgs} args - Arguments to update one ChatGroups.
     * @example
     * // Update one ChatGroups
     * const chatGroups = await prisma.chatGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupsUpdateArgs>(args: SelectSubset<T, ChatGroupsUpdateArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupsDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupsDeleteManyArgs>(args?: SelectSubset<T, ChatGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroups = await prisma.chatGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupsUpdateManyArgs>(args: SelectSubset<T, ChatGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroups.
     * @param {ChatGroupsUpsertArgs} args - Arguments to update or create a ChatGroups.
     * @example
     * // Update or create a ChatGroups
     * const chatGroups = await prisma.chatGroups.upsert({
     *   create: {
     *     // ... data to create a ChatGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroups we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupsUpsertArgs>(args: SelectSubset<T, ChatGroupsUpsertArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroups.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupsCountArgs>(
      args?: Subset<T, ChatGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGroupsAggregateArgs>(args: Subset<T, ChatGroupsAggregateArgs>): Prisma.PrismaPromise<GetChatGroupsAggregateType<T>>

    /**
     * Group by ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupsGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroups model
   */
  readonly fields: ChatGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatGroupMembers<T extends ChatGroups$ChatGroupMembersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroups$ChatGroupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends ChatGroups$UsersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroups$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ChatMessages<T extends ChatGroups$ChatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroups$ChatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatGroups model
   */
  interface ChatGroupsFieldRefs {
    readonly id: FieldRef<"ChatGroups", 'Int'>
    readonly keyForChatOne: FieldRef<"ChatGroups", 'String'>
    readonly name: FieldRef<"ChatGroups", 'String'>
    readonly ownerId: FieldRef<"ChatGroups", 'Int'>
    readonly deletedBy: FieldRef<"ChatGroups", 'Int'>
    readonly isDeleted: FieldRef<"ChatGroups", 'Boolean'>
    readonly deletedAt: FieldRef<"ChatGroups", 'DateTime'>
    readonly createdAt: FieldRef<"ChatGroups", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGroups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroups findUnique
   */
  export type ChatGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups findUniqueOrThrow
   */
  export type ChatGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups findFirst
   */
  export type ChatGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * ChatGroups findFirstOrThrow
   */
  export type ChatGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * ChatGroups findMany
   */
  export type ChatGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * ChatGroups create
   */
  export type ChatGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroups.
     */
    data?: XOR<ChatGroupsCreateInput, ChatGroupsUncheckedCreateInput>
  }

  /**
   * ChatGroups createMany
   */
  export type ChatGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupsCreateManyInput | ChatGroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatGroups update
   */
  export type ChatGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroups.
     */
    data: XOR<ChatGroupsUpdateInput, ChatGroupsUncheckedUpdateInput>
    /**
     * Choose, which ChatGroups to update.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups updateMany
   */
  export type ChatGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupsUpdateManyMutationInput, ChatGroupsUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupsWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
  }

  /**
   * ChatGroups upsert
   */
  export type ChatGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroups to update in case it exists.
     */
    where: ChatGroupsWhereUniqueInput
    /**
     * In case the ChatGroups found by the `where` argument doesn't exist, create a new ChatGroups with this data.
     */
    create: XOR<ChatGroupsCreateInput, ChatGroupsUncheckedCreateInput>
    /**
     * In case the ChatGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupsUpdateInput, ChatGroupsUncheckedUpdateInput>
  }

  /**
   * ChatGroups delete
   */
  export type ChatGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter which ChatGroups to delete.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups deleteMany
   */
  export type ChatGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupsWhereInput
    /**
     * Limit how many ChatGroups to delete.
     */
    limit?: number
  }

  /**
   * ChatGroups.ChatGroupMembers
   */
  export type ChatGroups$ChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    where?: ChatGroupMembersWhereInput
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    cursor?: ChatGroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroups.Users
   */
  export type ChatGroups$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * ChatGroups.ChatMessages
   */
  export type ChatGroups$ChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatGroups without action
   */
  export type ChatGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessages
   */

  export type AggregateChatMessages = {
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  export type ChatMessagesAvgAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatMessagesSumAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatMessagesMinAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesMaxAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesCountAggregateOutputType = {
    id: number
    chatGroupId: number
    userIdSender: number
    messageText: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessagesAvgAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatMessagesSumAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatMessagesMinAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesMaxAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesCountAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to aggregate.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type GetChatMessagesAggregateType<T extends ChatMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessages[P]>
      : GetScalarType<T[P], AggregateChatMessages[P]>
  }




  export type ChatMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithAggregationInput | ChatMessagesOrderByWithAggregationInput[]
    by: ChatMessagesScalarFieldEnum[] | ChatMessagesScalarFieldEnum
    having?: ChatMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessagesCountAggregateInputType | true
    _avg?: ChatMessagesAvgAggregateInputType
    _sum?: ChatMessagesSumAggregateInputType
    _min?: ChatMessagesMinAggregateInputType
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type ChatMessagesGroupByOutputType = {
    id: number
    chatGroupId: number
    userIdSender: number
    messageText: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  type GetChatMessagesGroupByPayload<T extends ChatMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatGroupId?: boolean
    userIdSender?: boolean
    messageText?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ChatGroups?: boolean | ChatGroupsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessages"]>



  export type ChatMessagesSelectScalar = {
    id?: boolean
    chatGroupId?: boolean
    userIdSender?: boolean
    messageText?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatGroupId" | "userIdSender" | "messageText" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessages"]>
  export type ChatMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroups?: boolean | ChatGroupsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ChatMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessages"
    objects: {
      ChatGroups: Prisma.$ChatGroupsPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatGroupId: number
      userIdSender: number
      messageText: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessages"]>
    composites: {}
  }

  type ChatMessagesGetPayload<S extends boolean | null | undefined | ChatMessagesDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagesPayload, S>

  type ChatMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessagesCountAggregateInputType | true
    }

  export interface ChatMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessages'], meta: { name: 'ChatMessages' } }
    /**
     * Find zero or one ChatMessages that matches the filter.
     * @param {ChatMessagesFindUniqueArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessagesFindUniqueArgs>(args: SelectSubset<T, ChatMessagesFindUniqueArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessagesFindUniqueOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessagesFindFirstArgs>(args?: SelectSubset<T, ChatMessagesFindFirstArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessagesWithIdOnly = await prisma.chatMessages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessagesFindManyArgs>(args?: SelectSubset<T, ChatMessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessages.
     * @param {ChatMessagesCreateArgs} args - Arguments to create a ChatMessages.
     * @example
     * // Create one ChatMessages
     * const ChatMessages = await prisma.chatMessages.create({
     *   data: {
     *     // ... data to create a ChatMessages
     *   }
     * })
     * 
     */
    create<T extends ChatMessagesCreateArgs>(args: SelectSubset<T, ChatMessagesCreateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessagesCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessages = await prisma.chatMessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessagesCreateManyArgs>(args?: SelectSubset<T, ChatMessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessages.
     * @param {ChatMessagesDeleteArgs} args - Arguments to delete one ChatMessages.
     * @example
     * // Delete one ChatMessages
     * const ChatMessages = await prisma.chatMessages.delete({
     *   where: {
     *     // ... filter to delete one ChatMessages
     *   }
     * })
     * 
     */
    delete<T extends ChatMessagesDeleteArgs>(args: SelectSubset<T, ChatMessagesDeleteArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessages.
     * @param {ChatMessagesUpdateArgs} args - Arguments to update one ChatMessages.
     * @example
     * // Update one ChatMessages
     * const chatMessages = await prisma.chatMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessagesUpdateArgs>(args: SelectSubset<T, ChatMessagesUpdateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessagesDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessagesDeleteManyArgs>(args?: SelectSubset<T, ChatMessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessages = await prisma.chatMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessagesUpdateManyArgs>(args: SelectSubset<T, ChatMessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessages.
     * @param {ChatMessagesUpsertArgs} args - Arguments to update or create a ChatMessages.
     * @example
     * // Update or create a ChatMessages
     * const chatMessages = await prisma.chatMessages.upsert({
     *   create: {
     *     // ... data to create a ChatMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessages we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessagesUpsertArgs>(args: SelectSubset<T, ChatMessagesUpsertArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessages.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessagesCountArgs>(
      args?: Subset<T, ChatMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessagesAggregateArgs>(args: Subset<T, ChatMessagesAggregateArgs>): Prisma.PrismaPromise<GetChatMessagesAggregateType<T>>

    /**
     * Group by ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessagesGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessages model
   */
  readonly fields: ChatMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatGroups<T extends ChatGroupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupsDefaultArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessages model
   */
  interface ChatMessagesFieldRefs {
    readonly id: FieldRef<"ChatMessages", 'Int'>
    readonly chatGroupId: FieldRef<"ChatMessages", 'Int'>
    readonly userIdSender: FieldRef<"ChatMessages", 'Int'>
    readonly messageText: FieldRef<"ChatMessages", 'String'>
    readonly deletedBy: FieldRef<"ChatMessages", 'Int'>
    readonly isDeleted: FieldRef<"ChatMessages", 'Boolean'>
    readonly deletedAt: FieldRef<"ChatMessages", 'DateTime'>
    readonly createdAt: FieldRef<"ChatMessages", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessages findUnique
   */
  export type ChatMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findUniqueOrThrow
   */
  export type ChatMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findFirst
   */
  export type ChatMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findFirstOrThrow
   */
  export type ChatMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findMany
   */
  export type ChatMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages create
   */
  export type ChatMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessages.
     */
    data: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
  }

  /**
   * ChatMessages createMany
   */
  export type ChatMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessagesCreateManyInput | ChatMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessages update
   */
  export type ChatMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessages.
     */
    data: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
    /**
     * Choose, which ChatMessages to update.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages updateMany
   */
  export type ChatMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessages upsert
   */
  export type ChatMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessages to update in case it exists.
     */
    where: ChatMessagesWhereUniqueInput
    /**
     * In case the ChatMessages found by the `where` argument doesn't exist, create a new ChatMessages with this data.
     */
    create: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
    /**
     * In case the ChatMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
  }

  /**
   * ChatMessages delete
   */
  export type ChatMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter which ChatMessages to delete.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages deleteMany
   */
  export type ChatMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessages without action
   */
  export type ChatMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    views: 'views',
    userId: 'userId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const PermissionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    endpoint: 'endpoint',
    method: 'method',
    module: 'module',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId',
    isActive: 'isActive',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    avatar: 'avatar',
    password: 'password',
    facebookId: 'facebookId',
    googleId: 'googleId',
    roleId: 'roleId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ChatGroupMembersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatGroupId: 'chatGroupId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupMembersScalarFieldEnum = (typeof ChatGroupMembersScalarFieldEnum)[keyof typeof ChatGroupMembersScalarFieldEnum]


  export const ChatGroupsScalarFieldEnum: {
    id: 'id',
    keyForChatOne: 'keyForChatOne',
    name: 'name',
    ownerId: 'ownerId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupsScalarFieldEnum = (typeof ChatGroupsScalarFieldEnum)[keyof typeof ChatGroupsScalarFieldEnum]


  export const ChatMessagesScalarFieldEnum: {
    id: 'id',
    chatGroupId: 'chatGroupId',
    userIdSender: 'userIdSender',
    messageText: 'messageText',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessagesScalarFieldEnum = (typeof ChatMessagesScalarFieldEnum)[keyof typeof ChatMessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ArticlesOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl'
  };

  export type ArticlesOrderByRelevanceFieldEnum = (typeof ArticlesOrderByRelevanceFieldEnum)[keyof typeof ArticlesOrderByRelevanceFieldEnum]


  export const PermissionsOrderByRelevanceFieldEnum: {
    name: 'name',
    endpoint: 'endpoint',
    method: 'method',
    module: 'module'
  };

  export type PermissionsOrderByRelevanceFieldEnum = (typeof PermissionsOrderByRelevanceFieldEnum)[keyof typeof PermissionsOrderByRelevanceFieldEnum]


  export const RolesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RolesOrderByRelevanceFieldEnum = (typeof RolesOrderByRelevanceFieldEnum)[keyof typeof RolesOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    fullName: 'fullName',
    avatar: 'avatar',
    password: 'password',
    facebookId: 'facebookId',
    googleId: 'googleId'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const ChatGroupsOrderByRelevanceFieldEnum: {
    keyForChatOne: 'keyForChatOne',
    name: 'name'
  };

  export type ChatGroupsOrderByRelevanceFieldEnum = (typeof ChatGroupsOrderByRelevanceFieldEnum)[keyof typeof ChatGroupsOrderByRelevanceFieldEnum]


  export const ChatMessagesOrderByRelevanceFieldEnum: {
    messageText: 'messageText'
  };

  export type ChatMessagesOrderByRelevanceFieldEnum = (typeof ChatMessagesOrderByRelevanceFieldEnum)[keyof typeof ChatMessagesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ArticlesWhereInput = {
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    id?: IntFilter<"Articles"> | number
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntFilter<"Articles"> | number
    deletedBy?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
  }

  export type ArticlesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ArticlesOrderByRelevanceInput
  }

  export type ArticlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntFilter<"Articles"> | number
    deletedBy?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
  }, "id">

  export type ArticlesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticlesCountOrderByAggregateInput
    _avg?: ArticlesAvgOrderByAggregateInput
    _max?: ArticlesMaxOrderByAggregateInput
    _min?: ArticlesMinOrderByAggregateInput
    _sum?: ArticlesSumOrderByAggregateInput
  }

  export type ArticlesScalarWhereWithAggregatesInput = {
    AND?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    OR?: ArticlesScalarWhereWithAggregatesInput[]
    NOT?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Articles"> | number
    title?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    content?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    views?: IntWithAggregatesFilter<"Articles"> | number
    userId?: IntWithAggregatesFilter<"Articles"> | number
    deletedBy?: IntWithAggregatesFilter<"Articles"> | number
    isDeleted?: BoolWithAggregatesFilter<"Articles"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
  }

  export type PermissionsWhereInput = {
    AND?: PermissionsWhereInput | PermissionsWhereInput[]
    OR?: PermissionsWhereInput[]
    NOT?: PermissionsWhereInput | PermissionsWhereInput[]
    id?: IntFilter<"Permissions"> | number
    name?: StringFilter<"Permissions"> | string
    endpoint?: StringFilter<"Permissions"> | string
    method?: StringFilter<"Permissions"> | string
    module?: StringFilter<"Permissions"> | string
    deletedBy?: IntFilter<"Permissions"> | number
    isDeleted?: BoolFilter<"Permissions"> | boolean
    deletedAt?: DateTimeFilter<"Permissions"> | Date | string
    createdAt?: DateTimeFilter<"Permissions"> | Date | string
    updatedAt?: DateTimeFilter<"Permissions"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
  }

  export type PermissionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RolePermission?: RolePermissionOrderByRelationAggregateInput
    _relevance?: PermissionsOrderByRelevanceInput
  }

  export type PermissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissionsWhereInput | PermissionsWhereInput[]
    OR?: PermissionsWhereInput[]
    NOT?: PermissionsWhereInput | PermissionsWhereInput[]
    name?: StringFilter<"Permissions"> | string
    endpoint?: StringFilter<"Permissions"> | string
    method?: StringFilter<"Permissions"> | string
    module?: StringFilter<"Permissions"> | string
    deletedBy?: IntFilter<"Permissions"> | number
    isDeleted?: BoolFilter<"Permissions"> | boolean
    deletedAt?: DateTimeFilter<"Permissions"> | Date | string
    createdAt?: DateTimeFilter<"Permissions"> | Date | string
    updatedAt?: DateTimeFilter<"Permissions"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
  }, "id">

  export type PermissionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionsCountOrderByAggregateInput
    _avg?: PermissionsAvgOrderByAggregateInput
    _max?: PermissionsMaxOrderByAggregateInput
    _min?: PermissionsMinOrderByAggregateInput
    _sum?: PermissionsSumOrderByAggregateInput
  }

  export type PermissionsScalarWhereWithAggregatesInput = {
    AND?: PermissionsScalarWhereWithAggregatesInput | PermissionsScalarWhereWithAggregatesInput[]
    OR?: PermissionsScalarWhereWithAggregatesInput[]
    NOT?: PermissionsScalarWhereWithAggregatesInput | PermissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permissions"> | number
    name?: StringWithAggregatesFilter<"Permissions"> | string
    endpoint?: StringWithAggregatesFilter<"Permissions"> | string
    method?: StringWithAggregatesFilter<"Permissions"> | string
    module?: StringWithAggregatesFilter<"Permissions"> | string
    deletedBy?: IntWithAggregatesFilter<"Permissions"> | number
    isDeleted?: BoolWithAggregatesFilter<"Permissions"> | boolean
    deletedAt?: DateTimeWithAggregatesFilter<"Permissions"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Permissions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permissions"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    isActive?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedBy?: IntFilter<"RolePermission"> | number
    isDeleted?: BoolFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Permissions?: XOR<PermissionsScalarRelationFilter, PermissionsWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Roles?: RolesOrderByWithRelationInput
    Permissions?: PermissionsOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    isActive?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedBy?: IntFilter<"RolePermission"> | number
    isDeleted?: BoolFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Permissions?: XOR<PermissionsScalarRelationFilter, PermissionsWhereInput>
  }, "id">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolePermission"> | number
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
    isActive?: BoolNullableWithAggregatesFilter<"RolePermission"> | boolean | null
    deletedBy?: IntWithAggregatesFilter<"RolePermission"> | number
    isDeleted?: BoolWithAggregatesFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    name?: StringNullableFilter<"Roles"> | string | null
    description?: StringNullableFilter<"Roles"> | string | null
    isActive?: BoolNullableFilter<"Roles"> | boolean | null
    deletedBy?: IntFilter<"Roles"> | number
    isDeleted?: BoolFilter<"Roles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
    Users?: UsersListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RolePermission?: RolePermissionOrderByRelationAggregateInput
    Users?: UsersOrderByRelationAggregateInput
    _relevance?: RolesOrderByRelevanceInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    name?: StringNullableFilter<"Roles"> | string | null
    description?: StringNullableFilter<"Roles"> | string | null
    isActive?: BoolNullableFilter<"Roles"> | boolean | null
    deletedBy?: IntFilter<"Roles"> | number
    isDeleted?: BoolFilter<"Roles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    RolePermission?: RolePermissionListRelationFilter
    Users?: UsersListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    name?: StringNullableWithAggregatesFilter<"Roles"> | string | null
    description?: StringNullableWithAggregatesFilter<"Roles"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"Roles"> | boolean | null
    deletedBy?: IntWithAggregatesFilter<"Roles"> | number
    isDeleted?: BoolWithAggregatesFilter<"Roles"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Roles"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    facebookId?: StringNullableFilter<"Users"> | string | null
    googleId?: StringNullableFilter<"Users"> | string | null
    roleId?: IntFilter<"Users"> | number
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    ChatGroups?: ChatGroupsListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    facebookId?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ChatGroupMembers?: ChatGroupMembersOrderByRelationAggregateInput
    ChatGroups?: ChatGroupsOrderByRelationAggregateInput
    ChatMessages?: ChatMessagesOrderByRelationAggregateInput
    Roles?: RolesOrderByWithRelationInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    facebookId?: string
    googleId?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    roleId?: IntFilter<"Users"> | number
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    ChatGroups?: ChatGroupsListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
    Roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
  }, "id" | "email" | "facebookId" | "googleId">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    facebookId?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    facebookId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    roleId?: IntWithAggregatesFilter<"Users"> | number
    deletedBy?: IntWithAggregatesFilter<"Users"> | number
    isDeleted?: BoolWithAggregatesFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ChatGroupMembersWhereInput = {
    AND?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    OR?: ChatGroupMembersWhereInput[]
    NOT?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    id?: IntFilter<"ChatGroupMembers"> | number
    userId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, ChatGroupsWhereInput> | null
  }

  export type ChatGroupMembersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    ChatGroups?: ChatGroupsOrderByWithRelationInput
  }

  export type ChatGroupMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    OR?: ChatGroupMembersWhereInput[]
    NOT?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    userId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, ChatGroupsWhereInput> | null
  }, "id">

  export type ChatGroupMembersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGroupMembersCountOrderByAggregateInput
    _avg?: ChatGroupMembersAvgOrderByAggregateInput
    _max?: ChatGroupMembersMaxOrderByAggregateInput
    _min?: ChatGroupMembersMinOrderByAggregateInput
    _sum?: ChatGroupMembersSumOrderByAggregateInput
  }

  export type ChatGroupMembersScalarWhereWithAggregatesInput = {
    AND?: ChatGroupMembersScalarWhereWithAggregatesInput | ChatGroupMembersScalarWhereWithAggregatesInput[]
    OR?: ChatGroupMembersScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupMembersScalarWhereWithAggregatesInput | ChatGroupMembersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGroupMembers"> | number
    userId?: IntNullableWithAggregatesFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableWithAggregatesFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntWithAggregatesFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolWithAggregatesFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGroupMembers"> | Date | string
  }

  export type ChatGroupsWhereInput = {
    AND?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    OR?: ChatGroupsWhereInput[]
    NOT?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    id?: IntFilter<"ChatGroups"> | number
    keyForChatOne?: StringNullableFilter<"ChatGroups"> | string | null
    name?: StringNullableFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableFilter<"ChatGroups"> | number | null
    deletedBy?: IntFilter<"ChatGroups"> | number
    isDeleted?: BoolFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroups"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatMessages?: ChatMessagesListRelationFilter
  }

  export type ChatGroupsOrderByWithRelationInput = {
    id?: SortOrder
    keyForChatOne?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ChatGroupMembers?: ChatGroupMembersOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
    ChatMessages?: ChatMessagesOrderByRelationAggregateInput
    _relevance?: ChatGroupsOrderByRelevanceInput
  }

  export type ChatGroupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    keyForChatOne?: string
    AND?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    OR?: ChatGroupsWhereInput[]
    NOT?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    name?: StringNullableFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableFilter<"ChatGroups"> | number | null
    deletedBy?: IntFilter<"ChatGroups"> | number
    isDeleted?: BoolFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroups"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatMessages?: ChatMessagesListRelationFilter
  }, "id" | "keyForChatOne">

  export type ChatGroupsOrderByWithAggregationInput = {
    id?: SortOrder
    keyForChatOne?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGroupsCountOrderByAggregateInput
    _avg?: ChatGroupsAvgOrderByAggregateInput
    _max?: ChatGroupsMaxOrderByAggregateInput
    _min?: ChatGroupsMinOrderByAggregateInput
    _sum?: ChatGroupsSumOrderByAggregateInput
  }

  export type ChatGroupsScalarWhereWithAggregatesInput = {
    AND?: ChatGroupsScalarWhereWithAggregatesInput | ChatGroupsScalarWhereWithAggregatesInput[]
    OR?: ChatGroupsScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupsScalarWhereWithAggregatesInput | ChatGroupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGroups"> | number
    keyForChatOne?: StringNullableWithAggregatesFilter<"ChatGroups"> | string | null
    name?: StringNullableWithAggregatesFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableWithAggregatesFilter<"ChatGroups"> | number | null
    deletedBy?: IntWithAggregatesFilter<"ChatGroups"> | number
    isDeleted?: BoolWithAggregatesFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGroups"> | Date | string
  }

  export type ChatMessagesWhereInput = {
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    id?: IntFilter<"ChatMessages"> | number
    chatGroupId?: IntFilter<"ChatMessages"> | number
    userIdSender?: IntFilter<"ChatMessages"> | number
    messageText?: StringNullableFilter<"ChatMessages"> | string | null
    deletedBy?: IntFilter<"ChatMessages"> | number
    isDeleted?: BoolFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
    ChatGroups?: XOR<ChatGroupsScalarRelationFilter, ChatGroupsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ChatMessagesOrderByWithRelationInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ChatGroups?: ChatGroupsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
    _relevance?: ChatMessagesOrderByRelevanceInput
  }

  export type ChatMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    chatGroupId?: IntFilter<"ChatMessages"> | number
    userIdSender?: IntFilter<"ChatMessages"> | number
    messageText?: StringNullableFilter<"ChatMessages"> | string | null
    deletedBy?: IntFilter<"ChatMessages"> | number
    isDeleted?: BoolFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
    ChatGroups?: XOR<ChatGroupsScalarRelationFilter, ChatGroupsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ChatMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessagesCountOrderByAggregateInput
    _avg?: ChatMessagesAvgOrderByAggregateInput
    _max?: ChatMessagesMaxOrderByAggregateInput
    _min?: ChatMessagesMinOrderByAggregateInput
    _sum?: ChatMessagesSumOrderByAggregateInput
  }

  export type ChatMessagesScalarWhereWithAggregatesInput = {
    AND?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    OR?: ChatMessagesScalarWhereWithAggregatesInput[]
    NOT?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessages"> | number
    chatGroupId?: IntWithAggregatesFilter<"ChatMessages"> | number
    userIdSender?: IntWithAggregatesFilter<"ChatMessages"> | number
    messageText?: StringNullableWithAggregatesFilter<"ChatMessages"> | string | null
    deletedBy?: IntWithAggregatesFilter<"ChatMessages"> | number
    isDeleted?: BoolWithAggregatesFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessages"> | Date | string
  }

  export type ArticlesCreateInput = {
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUncheckedCreateInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesCreateManyInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionsCreateInput = {
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionsUncheckedCreateInput = {
    id?: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionsCreateManyInput = {
    id?: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Roles: RolesCreateNestedOneWithoutRolePermissionInput
    Permissions: PermissionsCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: number
    roleId: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RolesUpdateOneRequiredWithoutRolePermissionNestedInput
    Permissions?: PermissionsUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyInput = {
    id?: number
    roleId: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateManyMutationInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateInput = {
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutRolesInput
    Users?: UsersCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRolesInput
    Users?: UsersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutRolesNestedInput
    Users?: UsersUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRolesNestedInput
    Users?: UsersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
    Roles?: RolesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
    Roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersCreateInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutChatGroupMembersInput
    ChatGroups?: ChatGroupsCreateNestedOneWithoutChatGroupMembersInput
  }

  export type ChatGroupMembersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersUpdateInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatGroupMembersNestedInput
    ChatGroups?: ChatGroupsUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type ChatGroupMembersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersCreateManyInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersUpdateManyMutationInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupsCreateInput = {
    keyForChatOne?: string | null
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutChatGroupsInput
    Users?: UsersCreateNestedOneWithoutChatGroupsInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateInput = {
    id?: number
    keyForChatOne?: string | null
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUpdateInput = {
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    Users?: UsersUpdateOneWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsCreateManyInput = {
    id?: number
    keyForChatOne?: string | null
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupsUpdateManyMutationInput = {
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups: ChatGroupsCreateNestedOneWithoutChatMessagesInput
    Users: UsersCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateInput = {
    id?: number
    chatGroupId: number
    userIdSender: number
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUpdateOneRequiredWithoutChatMessagesNestedInput
    Users?: UsersUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
    userIdSender?: IntFieldUpdateOperationsInput | number
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateManyInput = {
    id?: number
    chatGroupId: number
    userIdSender: number
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateManyMutationInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
    userIdSender?: IntFieldUpdateOperationsInput | number
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticlesOrderByRelevanceInput = {
    fields: ArticlesOrderByRelevanceFieldEnum | ArticlesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticlesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ArticlesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionsOrderByRelevanceInput = {
    fields: PermissionsOrderByRelevanceFieldEnum | PermissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermissionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type PermissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    module?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionsSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type PermissionsScalarRelationFilter = {
    is?: PermissionsWhereInput
    isNot?: PermissionsWhereInput
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    deletedBy?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesOrderByRelevanceInput = {
    fields: RolesOrderByRelevanceFieldEnum | RolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupMembersListRelationFilter = {
    every?: ChatGroupMembersWhereInput
    some?: ChatGroupMembersWhereInput
    none?: ChatGroupMembersWhereInput
  }

  export type ChatGroupsListRelationFilter = {
    every?: ChatGroupsWhereInput
    some?: ChatGroupsWhereInput
    none?: ChatGroupsWhereInput
  }

  export type ChatMessagesListRelationFilter = {
    every?: ChatMessagesWhereInput
    some?: ChatMessagesWhereInput
    none?: ChatMessagesWhereInput
  }

  export type ChatGroupMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    facebookId?: SortOrder
    googleId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    facebookId?: SortOrder
    googleId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    facebookId?: SortOrder
    googleId?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type ChatGroupsNullableScalarRelationFilter = {
    is?: ChatGroupsWhereInput | null
    isNot?: ChatGroupsWhereInput | null
  }

  export type ChatGroupMembersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMembersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMembersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMembersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ChatGroupsOrderByRelevanceInput = {
    fields: ChatGroupsOrderByRelevanceFieldEnum | ChatGroupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatGroupsCountOrderByAggregateInput = {
    id?: SortOrder
    keyForChatOne?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupsAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupsMaxOrderByAggregateInput = {
    id?: SortOrder
    keyForChatOne?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupsMinOrderByAggregateInput = {
    id?: SortOrder
    keyForChatOne?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupsSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupsScalarRelationFilter = {
    is?: ChatGroupsWhereInput
    isNot?: ChatGroupsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ChatMessagesOrderByRelevanceInput = {
    fields: ChatMessagesOrderByRelevanceFieldEnum | ChatMessagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesSumOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    deletedBy?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolePermissionCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RolePermissionUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionsInput | RolePermissionUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput> | RolePermissionCreateWithoutPermissionsInput[] | RolePermissionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionsInput | RolePermissionCreateOrConnectWithoutPermissionsInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: RolePermissionCreateManyPermissionsInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionsInput | RolePermissionUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolesCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRolePermissionInput
    connect?: RolesWhereUniqueInput
  }

  export type PermissionsCreateNestedOneWithoutRolePermissionInput = {
    create?: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionsCreateOrConnectWithoutRolePermissionInput
    connect?: PermissionsWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type RolesUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRolePermissionInput
    upsert?: RolesUpsertWithoutRolePermissionInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutRolePermissionInput, RolesUpdateWithoutRolePermissionInput>, RolesUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionsUpdateOneRequiredWithoutRolePermissionNestedInput = {
    create?: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
    connectOrCreate?: PermissionsCreateOrConnectWithoutRolePermissionInput
    upsert?: PermissionsUpsertWithoutRolePermissionInput
    connect?: PermissionsWhereUniqueInput
    update?: XOR<XOR<PermissionsUpdateToOneWithWhereWithoutRolePermissionInput, PermissionsUpdateWithoutRolePermissionInput>, PermissionsUncheckedUpdateWithoutRolePermissionInput>
  }

  export type RolePermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UsersCreateNestedManyWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRolesInput | RolePermissionUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRolesInput | RolePermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRolesInput | RolePermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRolesInput | UsersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRolesInput | UsersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRolesInput | UsersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput> | RolePermissionCreateWithoutRolesInput[] | RolePermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRolesInput | RolePermissionCreateOrConnectWithoutRolesInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRolesInput | RolePermissionUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: RolePermissionCreateManyRolesInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRolesInput | RolePermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRolesInput | RolePermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | UsersCreateWithoutRolesInput[] | UsersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | UsersCreateOrConnectWithoutRolesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRolesInput | UsersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UsersCreateManyRolesInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRolesInput | UsersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRolesInput | UsersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type ChatGroupMembersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type ChatGroupsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
  }

  export type ChatMessagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type ChatGroupsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatGroupMembersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutUsersInput | ChatGroupMembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type ChatGroupsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupsUpsertWithWhereUniqueWithoutUsersInput | ChatGroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    set?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    disconnect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    delete?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    update?: ChatGroupsUpdateWithWhereUniqueWithoutUsersInput | ChatGroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupsUpdateManyWithWhereWithoutUsersInput | ChatGroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
  }

  export type ChatMessagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutUsersInput | ChatMessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutUsersInput | ChatMessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutUsersInput | ChatMessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutUsersInput | ChatGroupMembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupsUpsertWithWhereUniqueWithoutUsersInput | ChatGroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    set?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    disconnect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    delete?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    update?: ChatGroupsUpdateWithWhereUniqueWithoutUsersInput | ChatGroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupsUpdateManyWithWhereWithoutUsersInput | ChatGroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutUsersInput | ChatMessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutUsersInput | ChatMessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutUsersInput | ChatMessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutChatGroupMembersInput = {
    create?: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupMembersInput
    connect?: UsersWhereUniqueInput
  }

  export type ChatGroupsCreateNestedOneWithoutChatGroupMembersInput = {
    create?: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatGroupMembersInput
    connect?: ChatGroupsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutChatGroupMembersNestedInput = {
    create?: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupMembersInput
    upsert?: UsersUpsertWithoutChatGroupMembersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChatGroupMembersInput, UsersUpdateWithoutChatGroupMembersInput>, UsersUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type ChatGroupsUpdateOneWithoutChatGroupMembersNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatGroupMembersInput
    upsert?: ChatGroupsUpsertWithoutChatGroupMembersInput
    disconnect?: ChatGroupsWhereInput | boolean
    delete?: ChatGroupsWhereInput | boolean
    connect?: ChatGroupsWhereUniqueInput
    update?: XOR<XOR<ChatGroupsUpdateToOneWithWhereWithoutChatGroupMembersInput, ChatGroupsUpdateWithoutChatGroupMembersInput>, ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatGroupMembersCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutChatGroupsInput = {
    create?: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupsInput
    connect?: UsersWhereUniqueInput
  }

  export type ChatMessagesCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput | ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutChatGroupsNestedInput = {
    create?: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupsInput
    upsert?: UsersUpsertWithoutChatGroupsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChatGroupsInput, UsersUpdateWithoutChatGroupsInput>, UsersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatMessagesUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput | ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput | ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput | ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type ChatGroupsCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatMessagesInput
    connect?: ChatGroupsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type ChatGroupsUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatMessagesInput
    upsert?: ChatGroupsUpsertWithoutChatMessagesInput
    connect?: ChatGroupsWhereUniqueInput
    update?: XOR<XOR<ChatGroupsUpdateToOneWithWhereWithoutChatMessagesInput, ChatGroupsUpdateWithoutChatMessagesInput>, ChatGroupsUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UsersUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatMessagesInput
    upsert?: UsersUpsertWithoutChatMessagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChatMessagesInput, UsersUpdateWithoutChatMessagesInput>, UsersUncheckedUpdateWithoutChatMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RolePermissionCreateWithoutPermissionsInput = {
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Roles: RolesCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionsInput = {
    id?: number
    roleId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutPermissionsInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput>
  }

  export type RolePermissionCreateManyPermissionsInputEnvelope = {
    data: RolePermissionCreateManyPermissionsInput | RolePermissionCreateManyPermissionsInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionsInput, RolePermissionUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RolePermissionCreateWithoutPermissionsInput, RolePermissionUncheckedCreateWithoutPermissionsInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionsInput, RolePermissionUncheckedUpdateWithoutPermissionsInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionsInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    isActive?: BoolNullableFilter<"RolePermission"> | boolean | null
    deletedBy?: IntFilter<"RolePermission"> | number
    isDeleted?: BoolFilter<"RolePermission"> | boolean
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
  }

  export type RolesCreateWithoutRolePermissionInput = {
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateWithoutRolePermissionInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesCreateOrConnectWithoutRolePermissionInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
  }

  export type PermissionsCreateWithoutRolePermissionInput = {
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionsUncheckedCreateWithoutRolePermissionInput = {
    id?: number
    name: string
    endpoint: string
    method: string
    module: string
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionsCreateOrConnectWithoutRolePermissionInput = {
    where: PermissionsWhereUniqueInput
    create: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
  }

  export type RolesUpsertWithoutRolePermissionInput = {
    update: XOR<RolesUpdateWithoutRolePermissionInput, RolesUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<RolesCreateWithoutRolePermissionInput, RolesUncheckedCreateWithoutRolePermissionInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutRolePermissionInput, RolesUncheckedUpdateWithoutRolePermissionInput>
  }

  export type RolesUpdateWithoutRolePermissionInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateWithoutRolePermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type PermissionsUpsertWithoutRolePermissionInput = {
    update: XOR<PermissionsUpdateWithoutRolePermissionInput, PermissionsUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<PermissionsCreateWithoutRolePermissionInput, PermissionsUncheckedCreateWithoutRolePermissionInput>
    where?: PermissionsWhereInput
  }

  export type PermissionsUpdateToOneWithWhereWithoutRolePermissionInput = {
    where?: PermissionsWhereInput
    data: XOR<PermissionsUpdateWithoutRolePermissionInput, PermissionsUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionsUpdateWithoutRolePermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionsUncheckedUpdateWithoutRolePermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateWithoutRolesInput = {
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Permissions: PermissionsCreateNestedOneWithoutRolePermissionInput
  }

  export type RolePermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutRolesInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput>
  }

  export type RolePermissionCreateManyRolesInputEnvelope = {
    data: RolePermissionCreateManyRolesInput | RolePermissionCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutRolesInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutRolesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutRolesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type UsersCreateManyRolesInputEnvelope = {
    data: UsersCreateManyRolesInput | UsersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRolesInput, RolePermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<RolePermissionCreateWithoutRolesInput, RolePermissionUncheckedCreateWithoutRolesInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRolesInput, RolePermissionUncheckedUpdateWithoutRolesInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRolesInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type UsersUpsertWithWhereUniqueWithoutRolesInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRolesInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
  }

  export type UsersUpdateManyWithWhereWithoutRolesInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRolesInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    facebookId?: StringNullableFilter<"Users"> | string | null
    googleId?: StringNullableFilter<"Users"> | string | null
    roleId?: IntFilter<"Users"> | number
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type ChatGroupMembersCreateWithoutUsersInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups?: ChatGroupsCreateNestedOneWithoutChatGroupMembersInput
  }

  export type ChatGroupMembersUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersCreateOrConnectWithoutUsersInput = {
    where: ChatGroupMembersWhereUniqueInput
    create: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupMembersCreateManyUsersInputEnvelope = {
    data: ChatGroupMembersCreateManyUsersInput | ChatGroupMembersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ChatGroupsCreateWithoutUsersInput = {
    keyForChatOne?: string | null
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutChatGroupsInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateWithoutUsersInput = {
    id?: number
    keyForChatOne?: string | null
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsCreateOrConnectWithoutUsersInput = {
    where: ChatGroupsWhereUniqueInput
    create: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupsCreateManyUsersInputEnvelope = {
    data: ChatGroupsCreateManyUsersInput | ChatGroupsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessagesCreateWithoutUsersInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups: ChatGroupsCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId: number
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutUsersInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput>
  }

  export type ChatMessagesCreateManyUsersInputEnvelope = {
    data: ChatMessagesCreateManyUsersInput | ChatMessagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type RolesCreateWithoutUsersInput = {
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    description?: string | null
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    RolePermission?: RolePermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupMembersWhereUniqueInput
    update: XOR<ChatGroupMembersUpdateWithoutUsersInput, ChatGroupMembersUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupMembersWhereUniqueInput
    data: XOR<ChatGroupMembersUpdateWithoutUsersInput, ChatGroupMembersUncheckedUpdateWithoutUsersInput>
  }

  export type ChatGroupMembersUpdateManyWithWhereWithoutUsersInput = {
    where: ChatGroupMembersScalarWhereInput
    data: XOR<ChatGroupMembersUpdateManyMutationInput, ChatGroupMembersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatGroupMembersScalarWhereInput = {
    AND?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
    OR?: ChatGroupMembersScalarWhereInput[]
    NOT?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
    id?: IntFilter<"ChatGroupMembers"> | number
    userId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
  }

  export type ChatGroupsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupsWhereUniqueInput
    update: XOR<ChatGroupsUpdateWithoutUsersInput, ChatGroupsUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupsWhereUniqueInput
    data: XOR<ChatGroupsUpdateWithoutUsersInput, ChatGroupsUncheckedUpdateWithoutUsersInput>
  }

  export type ChatGroupsUpdateManyWithWhereWithoutUsersInput = {
    where: ChatGroupsScalarWhereInput
    data: XOR<ChatGroupsUpdateManyMutationInput, ChatGroupsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatGroupsScalarWhereInput = {
    AND?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
    OR?: ChatGroupsScalarWhereInput[]
    NOT?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
    id?: IntFilter<"ChatGroups"> | number
    keyForChatOne?: StringNullableFilter<"ChatGroups"> | string | null
    name?: StringNullableFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableFilter<"ChatGroups"> | number | null
    deletedBy?: IntFilter<"ChatGroups"> | number
    isDeleted?: BoolFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroups"> | Date | string
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutUsersInput, ChatMessagesUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutUsersInput, ChatMessagesUncheckedUpdateWithoutUsersInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutUsersInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatMessagesScalarWhereInput = {
    AND?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    OR?: ChatMessagesScalarWhereInput[]
    NOT?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    id?: IntFilter<"ChatMessages"> | number
    chatGroupId?: IntFilter<"ChatMessages"> | number
    userIdSender?: IntFilter<"ChatMessages"> | number
    messageText?: StringNullableFilter<"ChatMessages"> | string | null
    deletedBy?: IntFilter<"ChatMessages"> | number
    isDeleted?: BoolFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RolePermission?: RolePermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type UsersCreateWithoutChatGroupMembersInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
    Roles?: RolesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutChatGroupMembersInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutChatGroupMembersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
  }

  export type ChatGroupsCreateWithoutChatGroupMembersInput = {
    keyForChatOne?: string | null
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutChatGroupsInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateWithoutChatGroupMembersInput = {
    id?: number
    keyForChatOne?: string | null
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsCreateOrConnectWithoutChatGroupMembersInput = {
    where: ChatGroupsWhereUniqueInput
    create: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
  }

  export type UsersUpsertWithoutChatGroupMembersInput = {
    update: XOR<UsersUpdateWithoutChatGroupMembersInput, UsersUncheckedUpdateWithoutChatGroupMembersInput>
    create: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChatGroupMembersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChatGroupMembersInput, UsersUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type UsersUpdateWithoutChatGroupMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
    Roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutChatGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ChatGroupsUpsertWithoutChatGroupMembersInput = {
    update: XOR<ChatGroupsUpdateWithoutChatGroupMembersInput, ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
    create: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    where?: ChatGroupsWhereInput
  }

  export type ChatGroupsUpdateToOneWithWhereWithoutChatGroupMembersInput = {
    where?: ChatGroupsWhereInput
    data: XOR<ChatGroupsUpdateWithoutChatGroupMembersInput, ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type ChatGroupsUpdateWithoutChatGroupMembersInput = {
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupMembersCreateWithoutChatGroupsInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutChatGroupMembersInput
  }

  export type ChatGroupMembersUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersCreateOrConnectWithoutChatGroupsInput = {
    where: ChatGroupMembersWhereUniqueInput
    create: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatGroupMembersCreateManyChatGroupsInputEnvelope = {
    data: ChatGroupMembersCreateManyChatGroupsInput | ChatGroupMembersCreateManyChatGroupsInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutChatGroupsInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
    Roles?: RolesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutChatGroupsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatMessagesCreateWithoutChatGroupsInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    userIdSender: number
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutChatGroupsInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatMessagesCreateManyChatGroupsInputEnvelope = {
    data: ChatMessagesCreateManyChatGroupsInput | ChatMessagesCreateManyChatGroupsInput[]
    skipDuplicates?: boolean
  }

  export type ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatGroupMembersWhereUniqueInput
    update: XOR<ChatGroupMembersUpdateWithoutChatGroupsInput, ChatGroupMembersUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatGroupMembersWhereUniqueInput
    data: XOR<ChatGroupMembersUpdateWithoutChatGroupsInput, ChatGroupMembersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput = {
    where: ChatGroupMembersScalarWhereInput
    data: XOR<ChatGroupMembersUpdateManyMutationInput, ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsInput>
  }

  export type UsersUpsertWithoutChatGroupsInput = {
    update: XOR<UsersUpdateWithoutChatGroupsInput, UsersUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChatGroupsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChatGroupsInput, UsersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type UsersUpdateWithoutChatGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
    Roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutChatGroupsInput, ChatMessagesUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutChatGroupsInput, ChatMessagesUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutChatGroupsInput>
  }

  export type ChatGroupsCreateWithoutChatMessagesInput = {
    keyForChatOne?: string | null
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutChatGroupsInput
    Users?: UsersCreateNestedOneWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    keyForChatOne?: string | null
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsCreateOrConnectWithoutChatMessagesInput = {
    where: ChatGroupsWhereUniqueInput
    create: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
  }

  export type UsersCreateWithoutChatMessagesInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    Roles?: RolesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    roleId?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutChatMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatGroupsUpsertWithoutChatMessagesInput = {
    update: XOR<ChatGroupsUpdateWithoutChatMessagesInput, ChatGroupsUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
    where?: ChatGroupsWhereInput
  }

  export type ChatGroupsUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ChatGroupsWhereInput
    data: XOR<ChatGroupsUpdateWithoutChatMessagesInput, ChatGroupsUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatGroupsUpdateWithoutChatMessagesInput = {
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    Users?: UsersUpdateOneWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type UsersUpsertWithoutChatMessagesInput = {
    update: XOR<UsersUpdateWithoutChatMessagesInput, UsersUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChatMessagesInput, UsersUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UsersUpdateWithoutChatMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    Roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RolePermissionCreateManyPermissionsInput = {
    id?: number
    roleId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateWithoutPermissionsInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RolesUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyRolesInput = {
    id?: number
    permissionId: number
    isActive?: boolean | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateManyRolesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    password?: string | null
    facebookId?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolePermissionUpdateWithoutRolesInput = {
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Permissions?: PermissionsUpdateOneRequiredWithoutRolePermissionNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersCreateManyUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupsCreateManyUsersInput = {
    id?: number
    keyForChatOne?: string | null
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateManyUsersInput = {
    id?: number
    chatGroupId: number
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersUpdateWithoutUsersInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type ChatGroupMembersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupsUpdateWithoutUsersInput = {
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyForChatOne?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUpdateWithoutUsersInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersCreateManyChatGroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateManyChatGroupsInput = {
    id?: number
    userIdSender: number
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersUpdateWithoutChatGroupsInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type ChatGroupMembersUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUpdateWithoutChatGroupsInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIdSender?: IntFieldUpdateOperationsInput | number
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIdSender?: IntFieldUpdateOperationsInput | number
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}