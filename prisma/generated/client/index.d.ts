
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
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Champion
 * 
 */
export type Champion = $Result.DefaultSelection<Prisma.$ChampionPayload>
/**
 * Model HomeInformation
 * 
 */
export type HomeInformation = $Result.DefaultSelection<Prisma.$HomeInformationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tournaments
 * const tournaments = await prisma.tournament.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Tournaments
   * const tournaments = await prisma.tournament.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs>;

  /**
   * `prisma.champion`: Exposes CRUD operations for the **Champion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Champions
    * const champions = await prisma.champion.findMany()
    * ```
    */
  get champion(): Prisma.ChampionDelegate<ExtArgs>;

  /**
   * `prisma.homeInformation`: Exposes CRUD operations for the **HomeInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeInformations
    * const homeInformations = await prisma.homeInformation.findMany()
    * ```
    */
  get homeInformation(): Prisma.HomeInformationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Tournament: 'Tournament',
    Champion: 'Champion',
    HomeInformation: 'HomeInformation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'tournament' | 'champion' | 'homeInformation'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>,
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      Champion: {
        payload: Prisma.$ChampionPayload<ExtArgs>
        fields: Prisma.ChampionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChampionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChampionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          findFirst: {
            args: Prisma.ChampionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChampionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          findMany: {
            args: Prisma.ChampionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>[]
          }
          create: {
            args: Prisma.ChampionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          createMany: {
            args: Prisma.ChampionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChampionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          update: {
            args: Prisma.ChampionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          deleteMany: {
            args: Prisma.ChampionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChampionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChampionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChampionPayload>
          }
          aggregate: {
            args: Prisma.ChampionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChampion>
          }
          groupBy: {
            args: Prisma.ChampionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChampionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChampionCountArgs<ExtArgs>,
            result: $Utils.Optional<ChampionCountAggregateOutputType> | number
          }
        }
      }
      HomeInformation: {
        payload: Prisma.$HomeInformationPayload<ExtArgs>
        fields: Prisma.HomeInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeInformationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeInformationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload>
          }
          findFirst: {
            args: Prisma.HomeInformationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeInformationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload>
          }
          findMany: {
            args: Prisma.HomeInformationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload>[]
          }
          create: {
            args: Prisma.HomeInformationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload>
          }
          createMany: {
            args: Prisma.HomeInformationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HomeInformationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload>
          }
          update: {
            args: Prisma.HomeInformationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload>
          }
          deleteMany: {
            args: Prisma.HomeInformationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HomeInformationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HomeInformationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HomeInformationPayload>
          }
          aggregate: {
            args: Prisma.HomeInformationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHomeInformation>
          }
          groupBy: {
            args: Prisma.HomeInformationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HomeInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeInformationCountArgs<ExtArgs>,
            result: $Utils.Optional<HomeInformationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    id: number | null
    startingTime: number | null
    increment: number | null
  }

  export type TournamentSumAggregateOutputType = {
    id: number | null
    startingTime: number | null
    increment: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    defendingChampion: string | null
    startDate: Date | null
    endDate: Date | null
    format: string | null
    startingTime: number | null
    increment: number | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    defendingChampion: string | null
    startDate: Date | null
    endDate: Date | null
    format: string | null
    startingTime: number | null
    increment: number | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    defendingChampion: number
    startDate: number
    endDate: number
    format: number
    startingTime: number
    increment: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    id?: true
    startingTime?: true
    increment?: true
  }

  export type TournamentSumAggregateInputType = {
    id?: true
    startingTime?: true
    increment?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    defendingChampion?: true
    startDate?: true
    endDate?: true
    format?: true
    startingTime?: true
    increment?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    defendingChampion?: true
    startDate?: true
    endDate?: true
    format?: true
    startingTime?: true
    increment?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    defendingChampion?: true
    startDate?: true
    endDate?: true
    format?: true
    startingTime?: true
    increment?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: number
    title: string
    subtitle: string | null
    defendingChampion: string | null
    startDate: Date
    endDate: Date | null
    format: string
    startingTime: number
    increment: number
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    defendingChampion?: boolean
    startDate?: boolean
    endDate?: boolean
    format?: boolean
    startingTime?: boolean
    increment?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    defendingChampion?: boolean
    startDate?: boolean
    endDate?: boolean
    format?: boolean
    startingTime?: boolean
    increment?: boolean
  }


  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      subtitle: string | null
      defendingChampion: string | null
      startDate: Date
      endDate: Date | null
      format: string
      startingTime: number
      increment: number
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }


  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TournamentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tournament that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TournamentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TournamentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
    **/
    create<T extends TournamentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tournaments.
     *     @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     *     @example
     *     // Create many Tournaments
     *     const tournament = await prisma.tournament.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TournamentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
    **/
    delete<T extends TournamentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TournamentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TournamentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TournamentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
    **/
    upsert<T extends TournamentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tournament model
   */ 
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'Int'>
    readonly title: FieldRef<"Tournament", 'String'>
    readonly subtitle: FieldRef<"Tournament", 'String'>
    readonly defendingChampion: FieldRef<"Tournament", 'String'>
    readonly startDate: FieldRef<"Tournament", 'DateTime'>
    readonly endDate: FieldRef<"Tournament", 'DateTime'>
    readonly format: FieldRef<"Tournament", 'String'>
    readonly startingTime: FieldRef<"Tournament", 'Int'>
    readonly increment: FieldRef<"Tournament", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }


  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }


  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }


  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }


  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
  }


  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }


  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
  }


  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
  }



  /**
   * Model Champion
   */

  export type AggregateChampion = {
    _count: ChampionCountAggregateOutputType | null
    _avg: ChampionAvgAggregateOutputType | null
    _sum: ChampionSumAggregateOutputType | null
    _min: ChampionMinAggregateOutputType | null
    _max: ChampionMaxAggregateOutputType | null
  }

  export type ChampionAvgAggregateOutputType = {
    years: number | null
  }

  export type ChampionSumAggregateOutputType = {
    years: number[]
  }

  export type ChampionMinAggregateOutputType = {
    firstInitial: string | null
    lastName: string | null
  }

  export type ChampionMaxAggregateOutputType = {
    firstInitial: string | null
    lastName: string | null
  }

  export type ChampionCountAggregateOutputType = {
    firstInitial: number
    lastName: number
    years: number
    _all: number
  }


  export type ChampionAvgAggregateInputType = {
    years?: true
  }

  export type ChampionSumAggregateInputType = {
    years?: true
  }

  export type ChampionMinAggregateInputType = {
    firstInitial?: true
    lastName?: true
  }

  export type ChampionMaxAggregateInputType = {
    firstInitial?: true
    lastName?: true
  }

  export type ChampionCountAggregateInputType = {
    firstInitial?: true
    lastName?: true
    years?: true
    _all?: true
  }

  export type ChampionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Champion to aggregate.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Champions
    **/
    _count?: true | ChampionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChampionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChampionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChampionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChampionMaxAggregateInputType
  }

  export type GetChampionAggregateType<T extends ChampionAggregateArgs> = {
        [P in keyof T & keyof AggregateChampion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChampion[P]>
      : GetScalarType<T[P], AggregateChampion[P]>
  }




  export type ChampionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChampionWhereInput
    orderBy?: ChampionOrderByWithAggregationInput | ChampionOrderByWithAggregationInput[]
    by: ChampionScalarFieldEnum[] | ChampionScalarFieldEnum
    having?: ChampionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChampionCountAggregateInputType | true
    _avg?: ChampionAvgAggregateInputType
    _sum?: ChampionSumAggregateInputType
    _min?: ChampionMinAggregateInputType
    _max?: ChampionMaxAggregateInputType
  }

  export type ChampionGroupByOutputType = {
    firstInitial: string
    lastName: string
    years: number[]
    _count: ChampionCountAggregateOutputType | null
    _avg: ChampionAvgAggregateOutputType | null
    _sum: ChampionSumAggregateOutputType | null
    _min: ChampionMinAggregateOutputType | null
    _max: ChampionMaxAggregateOutputType | null
  }

  type GetChampionGroupByPayload<T extends ChampionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChampionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChampionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChampionGroupByOutputType[P]>
            : GetScalarType<T[P], ChampionGroupByOutputType[P]>
        }
      >
    >


  export type ChampionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstInitial?: boolean
    lastName?: boolean
    years?: boolean
  }, ExtArgs["result"]["champion"]>

  export type ChampionSelectScalar = {
    firstInitial?: boolean
    lastName?: boolean
    years?: boolean
  }


  export type $ChampionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Champion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      firstInitial: string
      lastName: string
      years: number[]
    }, ExtArgs["result"]["champion"]>
    composites: {}
  }


  type ChampionGetPayload<S extends boolean | null | undefined | ChampionDefaultArgs> = $Result.GetResult<Prisma.$ChampionPayload, S>

  type ChampionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChampionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChampionCountAggregateInputType | true
    }

  export interface ChampionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Champion'], meta: { name: 'Champion' } }
    /**
     * Find zero or one Champion that matches the filter.
     * @param {ChampionFindUniqueArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChampionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChampionFindUniqueArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Champion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChampionFindUniqueOrThrowArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChampionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChampionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Champion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionFindFirstArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChampionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChampionFindFirstArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Champion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionFindFirstOrThrowArgs} args - Arguments to find a Champion
     * @example
     * // Get one Champion
     * const champion = await prisma.champion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChampionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChampionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Champions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Champions
     * const champions = await prisma.champion.findMany()
     * 
     * // Get first 10 Champions
     * const champions = await prisma.champion.findMany({ take: 10 })
     * 
     * // Only select the `firstInitial`
     * const championWithFirstInitialOnly = await prisma.champion.findMany({ select: { firstInitial: true } })
     * 
    **/
    findMany<T extends ChampionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChampionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Champion.
     * @param {ChampionCreateArgs} args - Arguments to create a Champion.
     * @example
     * // Create one Champion
     * const Champion = await prisma.champion.create({
     *   data: {
     *     // ... data to create a Champion
     *   }
     * })
     * 
    **/
    create<T extends ChampionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChampionCreateArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Champions.
     *     @param {ChampionCreateManyArgs} args - Arguments to create many Champions.
     *     @example
     *     // Create many Champions
     *     const champion = await prisma.champion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChampionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChampionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Champion.
     * @param {ChampionDeleteArgs} args - Arguments to delete one Champion.
     * @example
     * // Delete one Champion
     * const Champion = await prisma.champion.delete({
     *   where: {
     *     // ... filter to delete one Champion
     *   }
     * })
     * 
    **/
    delete<T extends ChampionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChampionDeleteArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Champion.
     * @param {ChampionUpdateArgs} args - Arguments to update one Champion.
     * @example
     * // Update one Champion
     * const champion = await prisma.champion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChampionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChampionUpdateArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Champions.
     * @param {ChampionDeleteManyArgs} args - Arguments to filter Champions to delete.
     * @example
     * // Delete a few Champions
     * const { count } = await prisma.champion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChampionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChampionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Champions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Champions
     * const champion = await prisma.champion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChampionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChampionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Champion.
     * @param {ChampionUpsertArgs} args - Arguments to update or create a Champion.
     * @example
     * // Update or create a Champion
     * const champion = await prisma.champion.upsert({
     *   create: {
     *     // ... data to create a Champion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Champion we want to update
     *   }
     * })
    **/
    upsert<T extends ChampionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChampionUpsertArgs<ExtArgs>>
    ): Prisma__ChampionClient<$Result.GetResult<Prisma.$ChampionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Champions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionCountArgs} args - Arguments to filter Champions to count.
     * @example
     * // Count the number of Champions
     * const count = await prisma.champion.count({
     *   where: {
     *     // ... the filter for the Champions we want to count
     *   }
     * })
    **/
    count<T extends ChampionCountArgs>(
      args?: Subset<T, ChampionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChampionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Champion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChampionAggregateArgs>(args: Subset<T, ChampionAggregateArgs>): Prisma.PrismaPromise<GetChampionAggregateType<T>>

    /**
     * Group by Champion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionGroupByArgs} args - Group by arguments.
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
      T extends ChampionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChampionGroupByArgs['orderBy'] }
        : { orderBy?: ChampionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChampionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChampionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Champion model
   */
  readonly fields: ChampionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Champion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChampionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Champion model
   */ 
  interface ChampionFieldRefs {
    readonly firstInitial: FieldRef<"Champion", 'String'>
    readonly lastName: FieldRef<"Champion", 'String'>
    readonly years: FieldRef<"Champion", 'Int[]'>
  }
    

  // Custom InputTypes

  /**
   * Champion findUnique
   */
  export type ChampionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where: ChampionWhereUniqueInput
  }


  /**
   * Champion findUniqueOrThrow
   */
  export type ChampionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where: ChampionWhereUniqueInput
  }


  /**
   * Champion findFirst
   */
  export type ChampionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Champions.
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Champions.
     */
    distinct?: ChampionScalarFieldEnum | ChampionScalarFieldEnum[]
  }


  /**
   * Champion findFirstOrThrow
   */
  export type ChampionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Filter, which Champion to fetch.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Champions.
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Champions.
     */
    distinct?: ChampionScalarFieldEnum | ChampionScalarFieldEnum[]
  }


  /**
   * Champion findMany
   */
  export type ChampionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Filter, which Champions to fetch.
     */
    where?: ChampionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Champions to fetch.
     */
    orderBy?: ChampionOrderByWithRelationInput | ChampionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Champions.
     */
    cursor?: ChampionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Champions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Champions.
     */
    skip?: number
    distinct?: ChampionScalarFieldEnum | ChampionScalarFieldEnum[]
  }


  /**
   * Champion create
   */
  export type ChampionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * The data needed to create a Champion.
     */
    data: XOR<ChampionCreateInput, ChampionUncheckedCreateInput>
  }


  /**
   * Champion createMany
   */
  export type ChampionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Champions.
     */
    data: ChampionCreateManyInput | ChampionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Champion update
   */
  export type ChampionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * The data needed to update a Champion.
     */
    data: XOR<ChampionUpdateInput, ChampionUncheckedUpdateInput>
    /**
     * Choose, which Champion to update.
     */
    where: ChampionWhereUniqueInput
  }


  /**
   * Champion updateMany
   */
  export type ChampionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Champions.
     */
    data: XOR<ChampionUpdateManyMutationInput, ChampionUncheckedUpdateManyInput>
    /**
     * Filter which Champions to update
     */
    where?: ChampionWhereInput
  }


  /**
   * Champion upsert
   */
  export type ChampionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * The filter to search for the Champion to update in case it exists.
     */
    where: ChampionWhereUniqueInput
    /**
     * In case the Champion found by the `where` argument doesn't exist, create a new Champion with this data.
     */
    create: XOR<ChampionCreateInput, ChampionUncheckedCreateInput>
    /**
     * In case the Champion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChampionUpdateInput, ChampionUncheckedUpdateInput>
  }


  /**
   * Champion delete
   */
  export type ChampionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
    /**
     * Filter which Champion to delete.
     */
    where: ChampionWhereUniqueInput
  }


  /**
   * Champion deleteMany
   */
  export type ChampionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Champions to delete
     */
    where?: ChampionWhereInput
  }


  /**
   * Champion without action
   */
  export type ChampionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Champion
     */
    select?: ChampionSelect<ExtArgs> | null
  }



  /**
   * Model HomeInformation
   */

  export type AggregateHomeInformation = {
    _count: HomeInformationCountAggregateOutputType | null
    _min: HomeInformationMinAggregateOutputType | null
    _max: HomeInformationMaxAggregateOutputType | null
  }

  export type HomeInformationMinAggregateOutputType = {
    location: string | null
    locationUrl: string | null
    content: string | null
  }

  export type HomeInformationMaxAggregateOutputType = {
    location: string | null
    locationUrl: string | null
    content: string | null
  }

  export type HomeInformationCountAggregateOutputType = {
    location: number
    locationUrl: number
    content: number
    _all: number
  }


  export type HomeInformationMinAggregateInputType = {
    location?: true
    locationUrl?: true
    content?: true
  }

  export type HomeInformationMaxAggregateInputType = {
    location?: true
    locationUrl?: true
    content?: true
  }

  export type HomeInformationCountAggregateInputType = {
    location?: true
    locationUrl?: true
    content?: true
    _all?: true
  }

  export type HomeInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeInformation to aggregate.
     */
    where?: HomeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeInformations to fetch.
     */
    orderBy?: HomeInformationOrderByWithRelationInput | HomeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeInformations
    **/
    _count?: true | HomeInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeInformationMaxAggregateInputType
  }

  export type GetHomeInformationAggregateType<T extends HomeInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeInformation[P]>
      : GetScalarType<T[P], AggregateHomeInformation[P]>
  }




  export type HomeInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeInformationWhereInput
    orderBy?: HomeInformationOrderByWithAggregationInput | HomeInformationOrderByWithAggregationInput[]
    by: HomeInformationScalarFieldEnum[] | HomeInformationScalarFieldEnum
    having?: HomeInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeInformationCountAggregateInputType | true
    _min?: HomeInformationMinAggregateInputType
    _max?: HomeInformationMaxAggregateInputType
  }

  export type HomeInformationGroupByOutputType = {
    location: string
    locationUrl: string
    content: string
    _count: HomeInformationCountAggregateOutputType | null
    _min: HomeInformationMinAggregateOutputType | null
    _max: HomeInformationMaxAggregateOutputType | null
  }

  type GetHomeInformationGroupByPayload<T extends HomeInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeInformationGroupByOutputType[P]>
            : GetScalarType<T[P], HomeInformationGroupByOutputType[P]>
        }
      >
    >


  export type HomeInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location?: boolean
    locationUrl?: boolean
    content?: boolean
  }, ExtArgs["result"]["homeInformation"]>

  export type HomeInformationSelectScalar = {
    location?: boolean
    locationUrl?: boolean
    content?: boolean
  }


  export type $HomeInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeInformation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      location: string
      locationUrl: string
      content: string
    }, ExtArgs["result"]["homeInformation"]>
    composites: {}
  }


  type HomeInformationGetPayload<S extends boolean | null | undefined | HomeInformationDefaultArgs> = $Result.GetResult<Prisma.$HomeInformationPayload, S>

  type HomeInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HomeInformationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HomeInformationCountAggregateInputType | true
    }

  export interface HomeInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeInformation'], meta: { name: 'HomeInformation' } }
    /**
     * Find zero or one HomeInformation that matches the filter.
     * @param {HomeInformationFindUniqueArgs} args - Arguments to find a HomeInformation
     * @example
     * // Get one HomeInformation
     * const homeInformation = await prisma.homeInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeInformationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HomeInformationFindUniqueArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HomeInformation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeInformationFindUniqueOrThrowArgs} args - Arguments to find a HomeInformation
     * @example
     * // Get one HomeInformation
     * const homeInformation = await prisma.homeInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeInformationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HomeInformationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HomeInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeInformationFindFirstArgs} args - Arguments to find a HomeInformation
     * @example
     * // Get one HomeInformation
     * const homeInformation = await prisma.homeInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeInformationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HomeInformationFindFirstArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HomeInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeInformationFindFirstOrThrowArgs} args - Arguments to find a HomeInformation
     * @example
     * // Get one HomeInformation
     * const homeInformation = await prisma.homeInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeInformationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HomeInformationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HomeInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeInformationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeInformations
     * const homeInformations = await prisma.homeInformation.findMany()
     * 
     * // Get first 10 HomeInformations
     * const homeInformations = await prisma.homeInformation.findMany({ take: 10 })
     * 
     * // Only select the `location`
     * const homeInformationWithLocationOnly = await prisma.homeInformation.findMany({ select: { location: true } })
     * 
    **/
    findMany<T extends HomeInformationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HomeInformationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HomeInformation.
     * @param {HomeInformationCreateArgs} args - Arguments to create a HomeInformation.
     * @example
     * // Create one HomeInformation
     * const HomeInformation = await prisma.homeInformation.create({
     *   data: {
     *     // ... data to create a HomeInformation
     *   }
     * })
     * 
    **/
    create<T extends HomeInformationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HomeInformationCreateArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HomeInformations.
     *     @param {HomeInformationCreateManyArgs} args - Arguments to create many HomeInformations.
     *     @example
     *     // Create many HomeInformations
     *     const homeInformation = await prisma.homeInformation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeInformationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HomeInformationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeInformation.
     * @param {HomeInformationDeleteArgs} args - Arguments to delete one HomeInformation.
     * @example
     * // Delete one HomeInformation
     * const HomeInformation = await prisma.homeInformation.delete({
     *   where: {
     *     // ... filter to delete one HomeInformation
     *   }
     * })
     * 
    **/
    delete<T extends HomeInformationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HomeInformationDeleteArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HomeInformation.
     * @param {HomeInformationUpdateArgs} args - Arguments to update one HomeInformation.
     * @example
     * // Update one HomeInformation
     * const homeInformation = await prisma.homeInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeInformationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HomeInformationUpdateArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HomeInformations.
     * @param {HomeInformationDeleteManyArgs} args - Arguments to filter HomeInformations to delete.
     * @example
     * // Delete a few HomeInformations
     * const { count } = await prisma.homeInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeInformationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HomeInformationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeInformations
     * const homeInformation = await prisma.homeInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeInformationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HomeInformationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeInformation.
     * @param {HomeInformationUpsertArgs} args - Arguments to update or create a HomeInformation.
     * @example
     * // Update or create a HomeInformation
     * const homeInformation = await prisma.homeInformation.upsert({
     *   create: {
     *     // ... data to create a HomeInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeInformation we want to update
     *   }
     * })
    **/
    upsert<T extends HomeInformationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HomeInformationUpsertArgs<ExtArgs>>
    ): Prisma__HomeInformationClient<$Result.GetResult<Prisma.$HomeInformationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HomeInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeInformationCountArgs} args - Arguments to filter HomeInformations to count.
     * @example
     * // Count the number of HomeInformations
     * const count = await prisma.homeInformation.count({
     *   where: {
     *     // ... the filter for the HomeInformations we want to count
     *   }
     * })
    **/
    count<T extends HomeInformationCountArgs>(
      args?: Subset<T, HomeInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeInformationAggregateArgs>(args: Subset<T, HomeInformationAggregateArgs>): Prisma.PrismaPromise<GetHomeInformationAggregateType<T>>

    /**
     * Group by HomeInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeInformationGroupByArgs} args - Group by arguments.
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
      T extends HomeInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeInformationGroupByArgs['orderBy'] }
        : { orderBy?: HomeInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeInformation model
   */
  readonly fields: HomeInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HomeInformation model
   */ 
  interface HomeInformationFieldRefs {
    readonly location: FieldRef<"HomeInformation", 'String'>
    readonly locationUrl: FieldRef<"HomeInformation", 'String'>
    readonly content: FieldRef<"HomeInformation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HomeInformation findUnique
   */
  export type HomeInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * Filter, which HomeInformation to fetch.
     */
    where: HomeInformationWhereUniqueInput
  }


  /**
   * HomeInformation findUniqueOrThrow
   */
  export type HomeInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * Filter, which HomeInformation to fetch.
     */
    where: HomeInformationWhereUniqueInput
  }


  /**
   * HomeInformation findFirst
   */
  export type HomeInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * Filter, which HomeInformation to fetch.
     */
    where?: HomeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeInformations to fetch.
     */
    orderBy?: HomeInformationOrderByWithRelationInput | HomeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeInformations.
     */
    cursor?: HomeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeInformations.
     */
    distinct?: HomeInformationScalarFieldEnum | HomeInformationScalarFieldEnum[]
  }


  /**
   * HomeInformation findFirstOrThrow
   */
  export type HomeInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * Filter, which HomeInformation to fetch.
     */
    where?: HomeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeInformations to fetch.
     */
    orderBy?: HomeInformationOrderByWithRelationInput | HomeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeInformations.
     */
    cursor?: HomeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeInformations.
     */
    distinct?: HomeInformationScalarFieldEnum | HomeInformationScalarFieldEnum[]
  }


  /**
   * HomeInformation findMany
   */
  export type HomeInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * Filter, which HomeInformations to fetch.
     */
    where?: HomeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeInformations to fetch.
     */
    orderBy?: HomeInformationOrderByWithRelationInput | HomeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeInformations.
     */
    cursor?: HomeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeInformations.
     */
    skip?: number
    distinct?: HomeInformationScalarFieldEnum | HomeInformationScalarFieldEnum[]
  }


  /**
   * HomeInformation create
   */
  export type HomeInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * The data needed to create a HomeInformation.
     */
    data: XOR<HomeInformationCreateInput, HomeInformationUncheckedCreateInput>
  }


  /**
   * HomeInformation createMany
   */
  export type HomeInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeInformations.
     */
    data: HomeInformationCreateManyInput | HomeInformationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HomeInformation update
   */
  export type HomeInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * The data needed to update a HomeInformation.
     */
    data: XOR<HomeInformationUpdateInput, HomeInformationUncheckedUpdateInput>
    /**
     * Choose, which HomeInformation to update.
     */
    where: HomeInformationWhereUniqueInput
  }


  /**
   * HomeInformation updateMany
   */
  export type HomeInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeInformations.
     */
    data: XOR<HomeInformationUpdateManyMutationInput, HomeInformationUncheckedUpdateManyInput>
    /**
     * Filter which HomeInformations to update
     */
    where?: HomeInformationWhereInput
  }


  /**
   * HomeInformation upsert
   */
  export type HomeInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * The filter to search for the HomeInformation to update in case it exists.
     */
    where: HomeInformationWhereUniqueInput
    /**
     * In case the HomeInformation found by the `where` argument doesn't exist, create a new HomeInformation with this data.
     */
    create: XOR<HomeInformationCreateInput, HomeInformationUncheckedCreateInput>
    /**
     * In case the HomeInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeInformationUpdateInput, HomeInformationUncheckedUpdateInput>
  }


  /**
   * HomeInformation delete
   */
  export type HomeInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
    /**
     * Filter which HomeInformation to delete.
     */
    where: HomeInformationWhereUniqueInput
  }


  /**
   * HomeInformation deleteMany
   */
  export type HomeInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeInformations to delete
     */
    where?: HomeInformationWhereInput
  }


  /**
   * HomeInformation without action
   */
  export type HomeInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeInformation
     */
    select?: HomeInformationSelect<ExtArgs> | null
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


  export const TournamentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    defendingChampion: 'defendingChampion',
    startDate: 'startDate',
    endDate: 'endDate',
    format: 'format',
    startingTime: 'startingTime',
    increment: 'increment'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const ChampionScalarFieldEnum: {
    firstInitial: 'firstInitial',
    lastName: 'lastName',
    years: 'years'
  };

  export type ChampionScalarFieldEnum = (typeof ChampionScalarFieldEnum)[keyof typeof ChampionScalarFieldEnum]


  export const HomeInformationScalarFieldEnum: {
    location: 'location',
    locationUrl: 'locationUrl',
    content: 'content'
  };

  export type HomeInformationScalarFieldEnum = (typeof HomeInformationScalarFieldEnum)[keyof typeof HomeInformationScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: IntFilter<"Tournament"> | number
    title?: StringFilter<"Tournament"> | string
    subtitle?: StringNullableFilter<"Tournament"> | string | null
    defendingChampion?: StringNullableFilter<"Tournament"> | string | null
    startDate?: DateTimeFilter<"Tournament"> | Date | string
    endDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    format?: StringFilter<"Tournament"> | string
    startingTime?: IntFilter<"Tournament"> | number
    increment?: IntFilter<"Tournament"> | number
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    defendingChampion?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    format?: SortOrder
    startingTime?: SortOrder
    increment?: SortOrder
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    title?: StringFilter<"Tournament"> | string
    subtitle?: StringNullableFilter<"Tournament"> | string | null
    defendingChampion?: StringNullableFilter<"Tournament"> | string | null
    startDate?: DateTimeFilter<"Tournament"> | Date | string
    endDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    format?: StringFilter<"Tournament"> | string
    startingTime?: IntFilter<"Tournament"> | number
    increment?: IntFilter<"Tournament"> | number
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    defendingChampion?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    format?: SortOrder
    startingTime?: SortOrder
    increment?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tournament"> | number
    title?: StringWithAggregatesFilter<"Tournament"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    defendingChampion?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    format?: StringWithAggregatesFilter<"Tournament"> | string
    startingTime?: IntWithAggregatesFilter<"Tournament"> | number
    increment?: IntWithAggregatesFilter<"Tournament"> | number
  }

  export type ChampionWhereInput = {
    AND?: ChampionWhereInput | ChampionWhereInput[]
    OR?: ChampionWhereInput[]
    NOT?: ChampionWhereInput | ChampionWhereInput[]
    firstInitial?: StringFilter<"Champion"> | string
    lastName?: StringFilter<"Champion"> | string
    years?: IntNullableListFilter<"Champion">
  }

  export type ChampionOrderByWithRelationInput = {
    firstInitial?: SortOrder
    lastName?: SortOrder
    years?: SortOrder
  }

  export type ChampionWhereUniqueInput = Prisma.AtLeast<{
    firstInitial_lastName?: ChampionFirstInitialLastNameCompoundUniqueInput
    AND?: ChampionWhereInput | ChampionWhereInput[]
    OR?: ChampionWhereInput[]
    NOT?: ChampionWhereInput | ChampionWhereInput[]
    firstInitial?: StringFilter<"Champion"> | string
    lastName?: StringFilter<"Champion"> | string
    years?: IntNullableListFilter<"Champion">
  }, "firstInitial_lastName">

  export type ChampionOrderByWithAggregationInput = {
    firstInitial?: SortOrder
    lastName?: SortOrder
    years?: SortOrder
    _count?: ChampionCountOrderByAggregateInput
    _avg?: ChampionAvgOrderByAggregateInput
    _max?: ChampionMaxOrderByAggregateInput
    _min?: ChampionMinOrderByAggregateInput
    _sum?: ChampionSumOrderByAggregateInput
  }

  export type ChampionScalarWhereWithAggregatesInput = {
    AND?: ChampionScalarWhereWithAggregatesInput | ChampionScalarWhereWithAggregatesInput[]
    OR?: ChampionScalarWhereWithAggregatesInput[]
    NOT?: ChampionScalarWhereWithAggregatesInput | ChampionScalarWhereWithAggregatesInput[]
    firstInitial?: StringWithAggregatesFilter<"Champion"> | string
    lastName?: StringWithAggregatesFilter<"Champion"> | string
    years?: IntNullableListFilter<"Champion">
  }

  export type HomeInformationWhereInput = {
    AND?: HomeInformationWhereInput | HomeInformationWhereInput[]
    OR?: HomeInformationWhereInput[]
    NOT?: HomeInformationWhereInput | HomeInformationWhereInput[]
    location?: StringFilter<"HomeInformation"> | string
    locationUrl?: StringFilter<"HomeInformation"> | string
    content?: StringFilter<"HomeInformation"> | string
  }

  export type HomeInformationOrderByWithRelationInput = {
    location?: SortOrder
    locationUrl?: SortOrder
    content?: SortOrder
  }

  export type HomeInformationWhereUniqueInput = Prisma.AtLeast<{
    location?: string
    AND?: HomeInformationWhereInput | HomeInformationWhereInput[]
    OR?: HomeInformationWhereInput[]
    NOT?: HomeInformationWhereInput | HomeInformationWhereInput[]
    locationUrl?: StringFilter<"HomeInformation"> | string
    content?: StringFilter<"HomeInformation"> | string
  }, "location">

  export type HomeInformationOrderByWithAggregationInput = {
    location?: SortOrder
    locationUrl?: SortOrder
    content?: SortOrder
    _count?: HomeInformationCountOrderByAggregateInput
    _max?: HomeInformationMaxOrderByAggregateInput
    _min?: HomeInformationMinOrderByAggregateInput
  }

  export type HomeInformationScalarWhereWithAggregatesInput = {
    AND?: HomeInformationScalarWhereWithAggregatesInput | HomeInformationScalarWhereWithAggregatesInput[]
    OR?: HomeInformationScalarWhereWithAggregatesInput[]
    NOT?: HomeInformationScalarWhereWithAggregatesInput | HomeInformationScalarWhereWithAggregatesInput[]
    location?: StringWithAggregatesFilter<"HomeInformation"> | string
    locationUrl?: StringWithAggregatesFilter<"HomeInformation"> | string
    content?: StringWithAggregatesFilter<"HomeInformation"> | string
  }

  export type TournamentCreateInput = {
    title: string
    subtitle?: string | null
    defendingChampion?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    format: string
    startingTime: number
    increment: number
  }

  export type TournamentUncheckedCreateInput = {
    id?: number
    title: string
    subtitle?: string | null
    defendingChampion?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    format: string
    startingTime: number
    increment: number
  }

  export type TournamentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    defendingChampion?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    format?: StringFieldUpdateOperationsInput | string
    startingTime?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    defendingChampion?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    format?: StringFieldUpdateOperationsInput | string
    startingTime?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentCreateManyInput = {
    id?: number
    title: string
    subtitle?: string | null
    defendingChampion?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    format: string
    startingTime: number
    increment: number
  }

  export type TournamentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    defendingChampion?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    format?: StringFieldUpdateOperationsInput | string
    startingTime?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    defendingChampion?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    format?: StringFieldUpdateOperationsInput | string
    startingTime?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
  }

  export type ChampionCreateInput = {
    firstInitial: string
    lastName: string
    years?: ChampionCreateyearsInput | number[]
  }

  export type ChampionUncheckedCreateInput = {
    firstInitial: string
    lastName: string
    years?: ChampionCreateyearsInput | number[]
  }

  export type ChampionUpdateInput = {
    firstInitial?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    years?: ChampionUpdateyearsInput | number[]
  }

  export type ChampionUncheckedUpdateInput = {
    firstInitial?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    years?: ChampionUpdateyearsInput | number[]
  }

  export type ChampionCreateManyInput = {
    firstInitial: string
    lastName: string
    years?: ChampionCreateyearsInput | number[]
  }

  export type ChampionUpdateManyMutationInput = {
    firstInitial?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    years?: ChampionUpdateyearsInput | number[]
  }

  export type ChampionUncheckedUpdateManyInput = {
    firstInitial?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    years?: ChampionUpdateyearsInput | number[]
  }

  export type HomeInformationCreateInput = {
    location: string
    locationUrl: string
    content: string
  }

  export type HomeInformationUncheckedCreateInput = {
    location: string
    locationUrl: string
    content: string
  }

  export type HomeInformationUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type HomeInformationUncheckedUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type HomeInformationCreateManyInput = {
    location: string
    locationUrl: string
    content: string
  }

  export type HomeInformationUpdateManyMutationInput = {
    location?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type HomeInformationUncheckedUpdateManyInput = {
    location?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    defendingChampion?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    format?: SortOrder
    startingTime?: SortOrder
    increment?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    id?: SortOrder
    startingTime?: SortOrder
    increment?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    defendingChampion?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    format?: SortOrder
    startingTime?: SortOrder
    increment?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    defendingChampion?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    format?: SortOrder
    startingTime?: SortOrder
    increment?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    id?: SortOrder
    startingTime?: SortOrder
    increment?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ChampionFirstInitialLastNameCompoundUniqueInput = {
    firstInitial: string
    lastName: string
  }

  export type ChampionCountOrderByAggregateInput = {
    firstInitial?: SortOrder
    lastName?: SortOrder
    years?: SortOrder
  }

  export type ChampionAvgOrderByAggregateInput = {
    years?: SortOrder
  }

  export type ChampionMaxOrderByAggregateInput = {
    firstInitial?: SortOrder
    lastName?: SortOrder
  }

  export type ChampionMinOrderByAggregateInput = {
    firstInitial?: SortOrder
    lastName?: SortOrder
  }

  export type ChampionSumOrderByAggregateInput = {
    years?: SortOrder
  }

  export type HomeInformationCountOrderByAggregateInput = {
    location?: SortOrder
    locationUrl?: SortOrder
    content?: SortOrder
  }

  export type HomeInformationMaxOrderByAggregateInput = {
    location?: SortOrder
    locationUrl?: SortOrder
    content?: SortOrder
  }

  export type HomeInformationMinOrderByAggregateInput = {
    location?: SortOrder
    locationUrl?: SortOrder
    content?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChampionCreateyearsInput = {
    set: number[]
  }

  export type ChampionUpdateyearsInput = {
    set?: number[]
    push?: number | number[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TournamentDefaultArgs instead
     */
    export type TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TournamentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChampionDefaultArgs instead
     */
    export type ChampionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChampionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HomeInformationDefaultArgs instead
     */
    export type HomeInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HomeInformationDefaultArgs<ExtArgs>

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