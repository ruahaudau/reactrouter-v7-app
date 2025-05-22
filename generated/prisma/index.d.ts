
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
 * Model PantryShelf
 * 
 */
export type PantryShelf = $Result.DefaultSelection<Prisma.$PantryShelfPayload>
/**
 * Model PantryItem
 * 
 */
export type PantryItem = $Result.DefaultSelection<Prisma.$PantryItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PantryShelves
 * const pantryShelves = await prisma.pantryShelf.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PantryShelves
   * const pantryShelves = await prisma.pantryShelf.findMany()
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
   * `prisma.pantryShelf`: Exposes CRUD operations for the **PantryShelf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PantryShelves
    * const pantryShelves = await prisma.pantryShelf.findMany()
    * ```
    */
  get pantryShelf(): Prisma.PantryShelfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantryItem`: Exposes CRUD operations for the **PantryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PantryItems
    * const pantryItems = await prisma.pantryItem.findMany()
    * ```
    */
  get pantryItem(): Prisma.PantryItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    PantryShelf: 'PantryShelf',
    PantryItem: 'PantryItem'
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
      modelProps: "pantryShelf" | "pantryItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PantryShelf: {
        payload: Prisma.$PantryShelfPayload<ExtArgs>
        fields: Prisma.PantryShelfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryShelfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryShelfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          findFirst: {
            args: Prisma.PantryShelfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryShelfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          findMany: {
            args: Prisma.PantryShelfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>[]
          }
          create: {
            args: Prisma.PantryShelfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          createMany: {
            args: Prisma.PantryShelfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PantryShelfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>[]
          }
          delete: {
            args: Prisma.PantryShelfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          update: {
            args: Prisma.PantryShelfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          deleteMany: {
            args: Prisma.PantryShelfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryShelfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PantryShelfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>[]
          }
          upsert: {
            args: Prisma.PantryShelfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryShelfPayload>
          }
          aggregate: {
            args: Prisma.PantryShelfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantryShelf>
          }
          groupBy: {
            args: Prisma.PantryShelfGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryShelfGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryShelfCountArgs<ExtArgs>
            result: $Utils.Optional<PantryShelfCountAggregateOutputType> | number
          }
        }
      }
      PantryItem: {
        payload: Prisma.$PantryItemPayload<ExtArgs>
        fields: Prisma.PantryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          findFirst: {
            args: Prisma.PantryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          findMany: {
            args: Prisma.PantryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>[]
          }
          create: {
            args: Prisma.PantryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          createMany: {
            args: Prisma.PantryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PantryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>[]
          }
          delete: {
            args: Prisma.PantryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          update: {
            args: Prisma.PantryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          deleteMany: {
            args: Prisma.PantryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PantryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>[]
          }
          upsert: {
            args: Prisma.PantryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          aggregate: {
            args: Prisma.PantryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantryItem>
          }
          groupBy: {
            args: Prisma.PantryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryItemCountArgs<ExtArgs>
            result: $Utils.Optional<PantryItemCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    pantryShelf?: PantryShelfOmit
    pantryItem?: PantryItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type PantryShelfCountOutputType
   */

  export type PantryShelfCountOutputType = {
    items: number
  }

  export type PantryShelfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PantryShelfCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PantryShelfCountOutputType without action
   */
  export type PantryShelfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelfCountOutputType
     */
    select?: PantryShelfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PantryShelfCountOutputType without action
   */
  export type PantryShelfCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PantryShelf
   */

  export type AggregatePantryShelf = {
    _count: PantryShelfCountAggregateOutputType | null
    _min: PantryShelfMinAggregateOutputType | null
    _max: PantryShelfMaxAggregateOutputType | null
  }

  export type PantryShelfMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantryShelfMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantryShelfCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PantryShelfMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantryShelfMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantryShelfCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PantryShelfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryShelf to aggregate.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PantryShelves
    **/
    _count?: true | PantryShelfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryShelfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryShelfMaxAggregateInputType
  }

  export type GetPantryShelfAggregateType<T extends PantryShelfAggregateArgs> = {
        [P in keyof T & keyof AggregatePantryShelf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantryShelf[P]>
      : GetScalarType<T[P], AggregatePantryShelf[P]>
  }




  export type PantryShelfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryShelfWhereInput
    orderBy?: PantryShelfOrderByWithAggregationInput | PantryShelfOrderByWithAggregationInput[]
    by: PantryShelfScalarFieldEnum[] | PantryShelfScalarFieldEnum
    having?: PantryShelfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryShelfCountAggregateInputType | true
    _min?: PantryShelfMinAggregateInputType
    _max?: PantryShelfMaxAggregateInputType
  }

  export type PantryShelfGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PantryShelfCountAggregateOutputType | null
    _min: PantryShelfMinAggregateOutputType | null
    _max: PantryShelfMaxAggregateOutputType | null
  }

  type GetPantryShelfGroupByPayload<T extends PantryShelfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryShelfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryShelfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryShelfGroupByOutputType[P]>
            : GetScalarType<T[P], PantryShelfGroupByOutputType[P]>
        }
      >
    >


  export type PantryShelfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | PantryShelf$itemsArgs<ExtArgs>
    _count?: boolean | PantryShelfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryShelf"]>

  export type PantryShelfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pantryShelf"]>

  export type PantryShelfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pantryShelf"]>

  export type PantryShelfSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PantryShelfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["pantryShelf"]>
  export type PantryShelfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PantryShelf$itemsArgs<ExtArgs>
    _count?: boolean | PantryShelfCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PantryShelfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PantryShelfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PantryShelfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PantryShelf"
    objects: {
      items: Prisma.$PantryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pantryShelf"]>
    composites: {}
  }

  type PantryShelfGetPayload<S extends boolean | null | undefined | PantryShelfDefaultArgs> = $Result.GetResult<Prisma.$PantryShelfPayload, S>

  type PantryShelfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryShelfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryShelfCountAggregateInputType | true
    }

  export interface PantryShelfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PantryShelf'], meta: { name: 'PantryShelf' } }
    /**
     * Find zero or one PantryShelf that matches the filter.
     * @param {PantryShelfFindUniqueArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryShelfFindUniqueArgs>(args: SelectSubset<T, PantryShelfFindUniqueArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PantryShelf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryShelfFindUniqueOrThrowArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryShelfFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryShelfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryShelf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfFindFirstArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryShelfFindFirstArgs>(args?: SelectSubset<T, PantryShelfFindFirstArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryShelf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfFindFirstOrThrowArgs} args - Arguments to find a PantryShelf
     * @example
     * // Get one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryShelfFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryShelfFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PantryShelves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PantryShelves
     * const pantryShelves = await prisma.pantryShelf.findMany()
     * 
     * // Get first 10 PantryShelves
     * const pantryShelves = await prisma.pantryShelf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantryShelfWithIdOnly = await prisma.pantryShelf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PantryShelfFindManyArgs>(args?: SelectSubset<T, PantryShelfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PantryShelf.
     * @param {PantryShelfCreateArgs} args - Arguments to create a PantryShelf.
     * @example
     * // Create one PantryShelf
     * const PantryShelf = await prisma.pantryShelf.create({
     *   data: {
     *     // ... data to create a PantryShelf
     *   }
     * })
     * 
     */
    create<T extends PantryShelfCreateArgs>(args: SelectSubset<T, PantryShelfCreateArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PantryShelves.
     * @param {PantryShelfCreateManyArgs} args - Arguments to create many PantryShelves.
     * @example
     * // Create many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryShelfCreateManyArgs>(args?: SelectSubset<T, PantryShelfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PantryShelves and returns the data saved in the database.
     * @param {PantryShelfCreateManyAndReturnArgs} args - Arguments to create many PantryShelves.
     * @example
     * // Create many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PantryShelves and only return the `id`
     * const pantryShelfWithIdOnly = await prisma.pantryShelf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PantryShelfCreateManyAndReturnArgs>(args?: SelectSubset<T, PantryShelfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PantryShelf.
     * @param {PantryShelfDeleteArgs} args - Arguments to delete one PantryShelf.
     * @example
     * // Delete one PantryShelf
     * const PantryShelf = await prisma.pantryShelf.delete({
     *   where: {
     *     // ... filter to delete one PantryShelf
     *   }
     * })
     * 
     */
    delete<T extends PantryShelfDeleteArgs>(args: SelectSubset<T, PantryShelfDeleteArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PantryShelf.
     * @param {PantryShelfUpdateArgs} args - Arguments to update one PantryShelf.
     * @example
     * // Update one PantryShelf
     * const pantryShelf = await prisma.pantryShelf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryShelfUpdateArgs>(args: SelectSubset<T, PantryShelfUpdateArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PantryShelves.
     * @param {PantryShelfDeleteManyArgs} args - Arguments to filter PantryShelves to delete.
     * @example
     * // Delete a few PantryShelves
     * const { count } = await prisma.pantryShelf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryShelfDeleteManyArgs>(args?: SelectSubset<T, PantryShelfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryShelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryShelfUpdateManyArgs>(args: SelectSubset<T, PantryShelfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryShelves and returns the data updated in the database.
     * @param {PantryShelfUpdateManyAndReturnArgs} args - Arguments to update many PantryShelves.
     * @example
     * // Update many PantryShelves
     * const pantryShelf = await prisma.pantryShelf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PantryShelves and only return the `id`
     * const pantryShelfWithIdOnly = await prisma.pantryShelf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PantryShelfUpdateManyAndReturnArgs>(args: SelectSubset<T, PantryShelfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PantryShelf.
     * @param {PantryShelfUpsertArgs} args - Arguments to update or create a PantryShelf.
     * @example
     * // Update or create a PantryShelf
     * const pantryShelf = await prisma.pantryShelf.upsert({
     *   create: {
     *     // ... data to create a PantryShelf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PantryShelf we want to update
     *   }
     * })
     */
    upsert<T extends PantryShelfUpsertArgs>(args: SelectSubset<T, PantryShelfUpsertArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PantryShelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfCountArgs} args - Arguments to filter PantryShelves to count.
     * @example
     * // Count the number of PantryShelves
     * const count = await prisma.pantryShelf.count({
     *   where: {
     *     // ... the filter for the PantryShelves we want to count
     *   }
     * })
    **/
    count<T extends PantryShelfCountArgs>(
      args?: Subset<T, PantryShelfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryShelfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PantryShelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PantryShelfAggregateArgs>(args: Subset<T, PantryShelfAggregateArgs>): Prisma.PrismaPromise<GetPantryShelfAggregateType<T>>

    /**
     * Group by PantryShelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryShelfGroupByArgs} args - Group by arguments.
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
      T extends PantryShelfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryShelfGroupByArgs['orderBy'] }
        : { orderBy?: PantryShelfGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PantryShelfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryShelfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PantryShelf model
   */
  readonly fields: PantryShelfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PantryShelf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryShelfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends PantryShelf$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PantryShelf$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PantryShelf model
   */
  interface PantryShelfFieldRefs {
    readonly id: FieldRef<"PantryShelf", 'String'>
    readonly name: FieldRef<"PantryShelf", 'String'>
    readonly createdAt: FieldRef<"PantryShelf", 'DateTime'>
    readonly updatedAt: FieldRef<"PantryShelf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PantryShelf findUnique
   */
  export type PantryShelfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf findUniqueOrThrow
   */
  export type PantryShelfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf findFirst
   */
  export type PantryShelfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryShelves.
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryShelves.
     */
    distinct?: PantryShelfScalarFieldEnum | PantryShelfScalarFieldEnum[]
  }

  /**
   * PantryShelf findFirstOrThrow
   */
  export type PantryShelfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelf to fetch.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryShelves.
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryShelves.
     */
    distinct?: PantryShelfScalarFieldEnum | PantryShelfScalarFieldEnum[]
  }

  /**
   * PantryShelf findMany
   */
  export type PantryShelfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter, which PantryShelves to fetch.
     */
    where?: PantryShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryShelves to fetch.
     */
    orderBy?: PantryShelfOrderByWithRelationInput | PantryShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PantryShelves.
     */
    cursor?: PantryShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryShelves.
     */
    skip?: number
    distinct?: PantryShelfScalarFieldEnum | PantryShelfScalarFieldEnum[]
  }

  /**
   * PantryShelf create
   */
  export type PantryShelfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * The data needed to create a PantryShelf.
     */
    data: XOR<PantryShelfCreateInput, PantryShelfUncheckedCreateInput>
  }

  /**
   * PantryShelf createMany
   */
  export type PantryShelfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PantryShelves.
     */
    data: PantryShelfCreateManyInput | PantryShelfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PantryShelf createManyAndReturn
   */
  export type PantryShelfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * The data used to create many PantryShelves.
     */
    data: PantryShelfCreateManyInput | PantryShelfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PantryShelf update
   */
  export type PantryShelfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * The data needed to update a PantryShelf.
     */
    data: XOR<PantryShelfUpdateInput, PantryShelfUncheckedUpdateInput>
    /**
     * Choose, which PantryShelf to update.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf updateMany
   */
  export type PantryShelfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PantryShelves.
     */
    data: XOR<PantryShelfUpdateManyMutationInput, PantryShelfUncheckedUpdateManyInput>
    /**
     * Filter which PantryShelves to update
     */
    where?: PantryShelfWhereInput
    /**
     * Limit how many PantryShelves to update.
     */
    limit?: number
  }

  /**
   * PantryShelf updateManyAndReturn
   */
  export type PantryShelfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * The data used to update PantryShelves.
     */
    data: XOR<PantryShelfUpdateManyMutationInput, PantryShelfUncheckedUpdateManyInput>
    /**
     * Filter which PantryShelves to update
     */
    where?: PantryShelfWhereInput
    /**
     * Limit how many PantryShelves to update.
     */
    limit?: number
  }

  /**
   * PantryShelf upsert
   */
  export type PantryShelfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * The filter to search for the PantryShelf to update in case it exists.
     */
    where: PantryShelfWhereUniqueInput
    /**
     * In case the PantryShelf found by the `where` argument doesn't exist, create a new PantryShelf with this data.
     */
    create: XOR<PantryShelfCreateInput, PantryShelfUncheckedCreateInput>
    /**
     * In case the PantryShelf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryShelfUpdateInput, PantryShelfUncheckedUpdateInput>
  }

  /**
   * PantryShelf delete
   */
  export type PantryShelfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
    /**
     * Filter which PantryShelf to delete.
     */
    where: PantryShelfWhereUniqueInput
  }

  /**
   * PantryShelf deleteMany
   */
  export type PantryShelfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryShelves to delete
     */
    where?: PantryShelfWhereInput
    /**
     * Limit how many PantryShelves to delete.
     */
    limit?: number
  }

  /**
   * PantryShelf.items
   */
  export type PantryShelf$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    where?: PantryItemWhereInput
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    cursor?: PantryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * PantryShelf without action
   */
  export type PantryShelfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryShelf
     */
    select?: PantryShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryShelf
     */
    omit?: PantryShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryShelfInclude<ExtArgs> | null
  }


  /**
   * Model PantryItem
   */

  export type AggregatePantryItem = {
    _count: PantryItemCountAggregateOutputType | null
    _min: PantryItemMinAggregateOutputType | null
    _max: PantryItemMaxAggregateOutputType | null
  }

  export type PantryItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    shelfId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantryItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    shelfId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantryItemCountAggregateOutputType = {
    id: number
    name: number
    shelfId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PantryItemMinAggregateInputType = {
    id?: true
    name?: true
    shelfId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantryItemMaxAggregateInputType = {
    id?: true
    name?: true
    shelfId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantryItemCountAggregateInputType = {
    id?: true
    name?: true
    shelfId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PantryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryItem to aggregate.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PantryItems
    **/
    _count?: true | PantryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryItemMaxAggregateInputType
  }

  export type GetPantryItemAggregateType<T extends PantryItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePantryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantryItem[P]>
      : GetScalarType<T[P], AggregatePantryItem[P]>
  }




  export type PantryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryItemWhereInput
    orderBy?: PantryItemOrderByWithAggregationInput | PantryItemOrderByWithAggregationInput[]
    by: PantryItemScalarFieldEnum[] | PantryItemScalarFieldEnum
    having?: PantryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryItemCountAggregateInputType | true
    _min?: PantryItemMinAggregateInputType
    _max?: PantryItemMaxAggregateInputType
  }

  export type PantryItemGroupByOutputType = {
    id: string
    name: string
    shelfId: string
    createdAt: Date
    updatedAt: Date
    _count: PantryItemCountAggregateOutputType | null
    _min: PantryItemMinAggregateOutputType | null
    _max: PantryItemMaxAggregateOutputType | null
  }

  type GetPantryItemGroupByPayload<T extends PantryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryItemGroupByOutputType[P]>
            : GetScalarType<T[P], PantryItemGroupByOutputType[P]>
        }
      >
    >


  export type PantryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shelfId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryItem"]>

  export type PantryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shelfId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryItem"]>

  export type PantryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shelfId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryItem"]>

  export type PantryItemSelectScalar = {
    id?: boolean
    name?: boolean
    shelfId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PantryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shelfId" | "createdAt" | "updatedAt", ExtArgs["result"]["pantryItem"]>
  export type PantryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }
  export type PantryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }
  export type PantryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelf?: boolean | PantryShelfDefaultArgs<ExtArgs>
  }

  export type $PantryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PantryItem"
    objects: {
      shelf: Prisma.$PantryShelfPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      shelfId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pantryItem"]>
    composites: {}
  }

  type PantryItemGetPayload<S extends boolean | null | undefined | PantryItemDefaultArgs> = $Result.GetResult<Prisma.$PantryItemPayload, S>

  type PantryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryItemCountAggregateInputType | true
    }

  export interface PantryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PantryItem'], meta: { name: 'PantryItem' } }
    /**
     * Find zero or one PantryItem that matches the filter.
     * @param {PantryItemFindUniqueArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryItemFindUniqueArgs>(args: SelectSubset<T, PantryItemFindUniqueArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PantryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryItemFindUniqueOrThrowArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindFirstArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryItemFindFirstArgs>(args?: SelectSubset<T, PantryItemFindFirstArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindFirstOrThrowArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PantryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PantryItems
     * const pantryItems = await prisma.pantryItem.findMany()
     * 
     * // Get first 10 PantryItems
     * const pantryItems = await prisma.pantryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantryItemWithIdOnly = await prisma.pantryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PantryItemFindManyArgs>(args?: SelectSubset<T, PantryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PantryItem.
     * @param {PantryItemCreateArgs} args - Arguments to create a PantryItem.
     * @example
     * // Create one PantryItem
     * const PantryItem = await prisma.pantryItem.create({
     *   data: {
     *     // ... data to create a PantryItem
     *   }
     * })
     * 
     */
    create<T extends PantryItemCreateArgs>(args: SelectSubset<T, PantryItemCreateArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PantryItems.
     * @param {PantryItemCreateManyArgs} args - Arguments to create many PantryItems.
     * @example
     * // Create many PantryItems
     * const pantryItem = await prisma.pantryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryItemCreateManyArgs>(args?: SelectSubset<T, PantryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PantryItems and returns the data saved in the database.
     * @param {PantryItemCreateManyAndReturnArgs} args - Arguments to create many PantryItems.
     * @example
     * // Create many PantryItems
     * const pantryItem = await prisma.pantryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PantryItems and only return the `id`
     * const pantryItemWithIdOnly = await prisma.pantryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PantryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PantryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PantryItem.
     * @param {PantryItemDeleteArgs} args - Arguments to delete one PantryItem.
     * @example
     * // Delete one PantryItem
     * const PantryItem = await prisma.pantryItem.delete({
     *   where: {
     *     // ... filter to delete one PantryItem
     *   }
     * })
     * 
     */
    delete<T extends PantryItemDeleteArgs>(args: SelectSubset<T, PantryItemDeleteArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PantryItem.
     * @param {PantryItemUpdateArgs} args - Arguments to update one PantryItem.
     * @example
     * // Update one PantryItem
     * const pantryItem = await prisma.pantryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryItemUpdateArgs>(args: SelectSubset<T, PantryItemUpdateArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PantryItems.
     * @param {PantryItemDeleteManyArgs} args - Arguments to filter PantryItems to delete.
     * @example
     * // Delete a few PantryItems
     * const { count } = await prisma.pantryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryItemDeleteManyArgs>(args?: SelectSubset<T, PantryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PantryItems
     * const pantryItem = await prisma.pantryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryItemUpdateManyArgs>(args: SelectSubset<T, PantryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryItems and returns the data updated in the database.
     * @param {PantryItemUpdateManyAndReturnArgs} args - Arguments to update many PantryItems.
     * @example
     * // Update many PantryItems
     * const pantryItem = await prisma.pantryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PantryItems and only return the `id`
     * const pantryItemWithIdOnly = await prisma.pantryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PantryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PantryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PantryItem.
     * @param {PantryItemUpsertArgs} args - Arguments to update or create a PantryItem.
     * @example
     * // Update or create a PantryItem
     * const pantryItem = await prisma.pantryItem.upsert({
     *   create: {
     *     // ... data to create a PantryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PantryItem we want to update
     *   }
     * })
     */
    upsert<T extends PantryItemUpsertArgs>(args: SelectSubset<T, PantryItemUpsertArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemCountArgs} args - Arguments to filter PantryItems to count.
     * @example
     * // Count the number of PantryItems
     * const count = await prisma.pantryItem.count({
     *   where: {
     *     // ... the filter for the PantryItems we want to count
     *   }
     * })
    **/
    count<T extends PantryItemCountArgs>(
      args?: Subset<T, PantryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PantryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PantryItemAggregateArgs>(args: Subset<T, PantryItemAggregateArgs>): Prisma.PrismaPromise<GetPantryItemAggregateType<T>>

    /**
     * Group by PantryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemGroupByArgs} args - Group by arguments.
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
      T extends PantryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryItemGroupByArgs['orderBy'] }
        : { orderBy?: PantryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PantryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PantryItem model
   */
  readonly fields: PantryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PantryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelf<T extends PantryShelfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PantryShelfDefaultArgs<ExtArgs>>): Prisma__PantryShelfClient<$Result.GetResult<Prisma.$PantryShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PantryItem model
   */
  interface PantryItemFieldRefs {
    readonly id: FieldRef<"PantryItem", 'String'>
    readonly name: FieldRef<"PantryItem", 'String'>
    readonly shelfId: FieldRef<"PantryItem", 'String'>
    readonly createdAt: FieldRef<"PantryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PantryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PantryItem findUnique
   */
  export type PantryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem findUniqueOrThrow
   */
  export type PantryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem findFirst
   */
  export type PantryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * PantryItem findFirstOrThrow
   */
  export type PantryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * PantryItem findMany
   */
  export type PantryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItems to fetch.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * PantryItem create
   */
  export type PantryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PantryItem.
     */
    data: XOR<PantryItemCreateInput, PantryItemUncheckedCreateInput>
  }

  /**
   * PantryItem createMany
   */
  export type PantryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PantryItems.
     */
    data: PantryItemCreateManyInput | PantryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PantryItem createManyAndReturn
   */
  export type PantryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * The data used to create many PantryItems.
     */
    data: PantryItemCreateManyInput | PantryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PantryItem update
   */
  export type PantryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PantryItem.
     */
    data: XOR<PantryItemUpdateInput, PantryItemUncheckedUpdateInput>
    /**
     * Choose, which PantryItem to update.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem updateMany
   */
  export type PantryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PantryItems.
     */
    data: XOR<PantryItemUpdateManyMutationInput, PantryItemUncheckedUpdateManyInput>
    /**
     * Filter which PantryItems to update
     */
    where?: PantryItemWhereInput
    /**
     * Limit how many PantryItems to update.
     */
    limit?: number
  }

  /**
   * PantryItem updateManyAndReturn
   */
  export type PantryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * The data used to update PantryItems.
     */
    data: XOR<PantryItemUpdateManyMutationInput, PantryItemUncheckedUpdateManyInput>
    /**
     * Filter which PantryItems to update
     */
    where?: PantryItemWhereInput
    /**
     * Limit how many PantryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PantryItem upsert
   */
  export type PantryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PantryItem to update in case it exists.
     */
    where: PantryItemWhereUniqueInput
    /**
     * In case the PantryItem found by the `where` argument doesn't exist, create a new PantryItem with this data.
     */
    create: XOR<PantryItemCreateInput, PantryItemUncheckedCreateInput>
    /**
     * In case the PantryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryItemUpdateInput, PantryItemUncheckedUpdateInput>
  }

  /**
   * PantryItem delete
   */
  export type PantryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter which PantryItem to delete.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem deleteMany
   */
  export type PantryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryItems to delete
     */
    where?: PantryItemWhereInput
    /**
     * Limit how many PantryItems to delete.
     */
    limit?: number
  }

  /**
   * PantryItem without action
   */
  export type PantryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
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


  export const PantryShelfScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PantryShelfScalarFieldEnum = (typeof PantryShelfScalarFieldEnum)[keyof typeof PantryShelfScalarFieldEnum]


  export const PantryItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shelfId: 'shelfId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PantryItemScalarFieldEnum = (typeof PantryItemScalarFieldEnum)[keyof typeof PantryItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PantryShelfWhereInput = {
    AND?: PantryShelfWhereInput | PantryShelfWhereInput[]
    OR?: PantryShelfWhereInput[]
    NOT?: PantryShelfWhereInput | PantryShelfWhereInput[]
    id?: StringFilter<"PantryShelf"> | string
    name?: StringFilter<"PantryShelf"> | string
    createdAt?: DateTimeFilter<"PantryShelf"> | Date | string
    updatedAt?: DateTimeFilter<"PantryShelf"> | Date | string
    items?: PantryItemListRelationFilter
  }

  export type PantryShelfOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: PantryItemOrderByRelationAggregateInput
  }

  export type PantryShelfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PantryShelfWhereInput | PantryShelfWhereInput[]
    OR?: PantryShelfWhereInput[]
    NOT?: PantryShelfWhereInput | PantryShelfWhereInput[]
    name?: StringFilter<"PantryShelf"> | string
    createdAt?: DateTimeFilter<"PantryShelf"> | Date | string
    updatedAt?: DateTimeFilter<"PantryShelf"> | Date | string
    items?: PantryItemListRelationFilter
  }, "id">

  export type PantryShelfOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PantryShelfCountOrderByAggregateInput
    _max?: PantryShelfMaxOrderByAggregateInput
    _min?: PantryShelfMinOrderByAggregateInput
  }

  export type PantryShelfScalarWhereWithAggregatesInput = {
    AND?: PantryShelfScalarWhereWithAggregatesInput | PantryShelfScalarWhereWithAggregatesInput[]
    OR?: PantryShelfScalarWhereWithAggregatesInput[]
    NOT?: PantryShelfScalarWhereWithAggregatesInput | PantryShelfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PantryShelf"> | string
    name?: StringWithAggregatesFilter<"PantryShelf"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PantryShelf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PantryShelf"> | Date | string
  }

  export type PantryItemWhereInput = {
    AND?: PantryItemWhereInput | PantryItemWhereInput[]
    OR?: PantryItemWhereInput[]
    NOT?: PantryItemWhereInput | PantryItemWhereInput[]
    id?: StringFilter<"PantryItem"> | string
    name?: StringFilter<"PantryItem"> | string
    shelfId?: StringFilter<"PantryItem"> | string
    createdAt?: DateTimeFilter<"PantryItem"> | Date | string
    updatedAt?: DateTimeFilter<"PantryItem"> | Date | string
    shelf?: XOR<PantryShelfScalarRelationFilter, PantryShelfWhereInput>
  }

  export type PantryItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shelf?: PantryShelfOrderByWithRelationInput
  }

  export type PantryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PantryItemWhereInput | PantryItemWhereInput[]
    OR?: PantryItemWhereInput[]
    NOT?: PantryItemWhereInput | PantryItemWhereInput[]
    name?: StringFilter<"PantryItem"> | string
    shelfId?: StringFilter<"PantryItem"> | string
    createdAt?: DateTimeFilter<"PantryItem"> | Date | string
    updatedAt?: DateTimeFilter<"PantryItem"> | Date | string
    shelf?: XOR<PantryShelfScalarRelationFilter, PantryShelfWhereInput>
  }, "id">

  export type PantryItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PantryItemCountOrderByAggregateInput
    _max?: PantryItemMaxOrderByAggregateInput
    _min?: PantryItemMinOrderByAggregateInput
  }

  export type PantryItemScalarWhereWithAggregatesInput = {
    AND?: PantryItemScalarWhereWithAggregatesInput | PantryItemScalarWhereWithAggregatesInput[]
    OR?: PantryItemScalarWhereWithAggregatesInput[]
    NOT?: PantryItemScalarWhereWithAggregatesInput | PantryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PantryItem"> | string
    name?: StringWithAggregatesFilter<"PantryItem"> | string
    shelfId?: StringWithAggregatesFilter<"PantryItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PantryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PantryItem"> | Date | string
  }

  export type PantryShelfCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PantryItemCreateNestedManyWithoutShelfInput
  }

  export type PantryShelfUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PantryItemUncheckedCreateNestedManyWithoutShelfInput
  }

  export type PantryShelfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PantryItemUpdateManyWithoutShelfNestedInput
  }

  export type PantryShelfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PantryItemUncheckedUpdateManyWithoutShelfNestedInput
  }

  export type PantryShelfCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryShelfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryShelfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shelf: PantryShelfCreateNestedOneWithoutItemsInput
  }

  export type PantryItemUncheckedCreateInput = {
    id?: string
    name: string
    shelfId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelf?: PantryShelfUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PantryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shelfId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemCreateManyInput = {
    id?: string
    name: string
    shelfId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shelfId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PantryItemListRelationFilter = {
    every?: PantryItemWhereInput
    some?: PantryItemWhereInput
    none?: PantryItemWhereInput
  }

  export type PantryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PantryShelfCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryShelfMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryShelfMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PantryShelfScalarRelationFilter = {
    is?: PantryShelfWhereInput
    isNot?: PantryShelfWhereInput
  }

  export type PantryItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantryItemCreateNestedManyWithoutShelfInput = {
    create?: XOR<PantryItemCreateWithoutShelfInput, PantryItemUncheckedCreateWithoutShelfInput> | PantryItemCreateWithoutShelfInput[] | PantryItemUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutShelfInput | PantryItemCreateOrConnectWithoutShelfInput[]
    createMany?: PantryItemCreateManyShelfInputEnvelope
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
  }

  export type PantryItemUncheckedCreateNestedManyWithoutShelfInput = {
    create?: XOR<PantryItemCreateWithoutShelfInput, PantryItemUncheckedCreateWithoutShelfInput> | PantryItemCreateWithoutShelfInput[] | PantryItemUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutShelfInput | PantryItemCreateOrConnectWithoutShelfInput[]
    createMany?: PantryItemCreateManyShelfInputEnvelope
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PantryItemUpdateManyWithoutShelfNestedInput = {
    create?: XOR<PantryItemCreateWithoutShelfInput, PantryItemUncheckedCreateWithoutShelfInput> | PantryItemCreateWithoutShelfInput[] | PantryItemUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutShelfInput | PantryItemCreateOrConnectWithoutShelfInput[]
    upsert?: PantryItemUpsertWithWhereUniqueWithoutShelfInput | PantryItemUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: PantryItemCreateManyShelfInputEnvelope
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    update?: PantryItemUpdateWithWhereUniqueWithoutShelfInput | PantryItemUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: PantryItemUpdateManyWithWhereWithoutShelfInput | PantryItemUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
  }

  export type PantryItemUncheckedUpdateManyWithoutShelfNestedInput = {
    create?: XOR<PantryItemCreateWithoutShelfInput, PantryItemUncheckedCreateWithoutShelfInput> | PantryItemCreateWithoutShelfInput[] | PantryItemUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutShelfInput | PantryItemCreateOrConnectWithoutShelfInput[]
    upsert?: PantryItemUpsertWithWhereUniqueWithoutShelfInput | PantryItemUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: PantryItemCreateManyShelfInputEnvelope
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    update?: PantryItemUpdateWithWhereUniqueWithoutShelfInput | PantryItemUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: PantryItemUpdateManyWithWhereWithoutShelfInput | PantryItemUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
  }

  export type PantryShelfCreateNestedOneWithoutItemsInput = {
    create?: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PantryShelfCreateOrConnectWithoutItemsInput
    connect?: PantryShelfWhereUniqueInput
  }

  export type PantryShelfUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PantryShelfCreateOrConnectWithoutItemsInput
    upsert?: PantryShelfUpsertWithoutItemsInput
    connect?: PantryShelfWhereUniqueInput
    update?: XOR<XOR<PantryShelfUpdateToOneWithWhereWithoutItemsInput, PantryShelfUpdateWithoutItemsInput>, PantryShelfUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PantryItemCreateWithoutShelfInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryItemUncheckedCreateWithoutShelfInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryItemCreateOrConnectWithoutShelfInput = {
    where: PantryItemWhereUniqueInput
    create: XOR<PantryItemCreateWithoutShelfInput, PantryItemUncheckedCreateWithoutShelfInput>
  }

  export type PantryItemCreateManyShelfInputEnvelope = {
    data: PantryItemCreateManyShelfInput | PantryItemCreateManyShelfInput[]
    skipDuplicates?: boolean
  }

  export type PantryItemUpsertWithWhereUniqueWithoutShelfInput = {
    where: PantryItemWhereUniqueInput
    update: XOR<PantryItemUpdateWithoutShelfInput, PantryItemUncheckedUpdateWithoutShelfInput>
    create: XOR<PantryItemCreateWithoutShelfInput, PantryItemUncheckedCreateWithoutShelfInput>
  }

  export type PantryItemUpdateWithWhereUniqueWithoutShelfInput = {
    where: PantryItemWhereUniqueInput
    data: XOR<PantryItemUpdateWithoutShelfInput, PantryItemUncheckedUpdateWithoutShelfInput>
  }

  export type PantryItemUpdateManyWithWhereWithoutShelfInput = {
    where: PantryItemScalarWhereInput
    data: XOR<PantryItemUpdateManyMutationInput, PantryItemUncheckedUpdateManyWithoutShelfInput>
  }

  export type PantryItemScalarWhereInput = {
    AND?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
    OR?: PantryItemScalarWhereInput[]
    NOT?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
    id?: StringFilter<"PantryItem"> | string
    name?: StringFilter<"PantryItem"> | string
    shelfId?: StringFilter<"PantryItem"> | string
    createdAt?: DateTimeFilter<"PantryItem"> | Date | string
    updatedAt?: DateTimeFilter<"PantryItem"> | Date | string
  }

  export type PantryShelfCreateWithoutItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryShelfUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryShelfCreateOrConnectWithoutItemsInput = {
    where: PantryShelfWhereUniqueInput
    create: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
  }

  export type PantryShelfUpsertWithoutItemsInput = {
    update: XOR<PantryShelfUpdateWithoutItemsInput, PantryShelfUncheckedUpdateWithoutItemsInput>
    create: XOR<PantryShelfCreateWithoutItemsInput, PantryShelfUncheckedCreateWithoutItemsInput>
    where?: PantryShelfWhereInput
  }

  export type PantryShelfUpdateToOneWithWhereWithoutItemsInput = {
    where?: PantryShelfWhereInput
    data: XOR<PantryShelfUpdateWithoutItemsInput, PantryShelfUncheckedUpdateWithoutItemsInput>
  }

  export type PantryShelfUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryShelfUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemCreateManyShelfInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantryItemUpdateWithoutShelfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUncheckedUpdateWithoutShelfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUncheckedUpdateManyWithoutShelfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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