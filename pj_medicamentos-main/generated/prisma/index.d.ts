
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model MedicationSchedule
 * 
 */
export type MedicationSchedule = $Result.DefaultSelection<Prisma.$MedicationSchedulePayload>
/**
 * Model MedicalHistory
 * 
 */
export type MedicalHistory = $Result.DefaultSelection<Prisma.$MedicalHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PATIENT: 'PATIENT',
  CAREGIVER: 'CAREGIVER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ScheduleStatus: {
  PENDING: 'PENDING',
  TAKEN: 'TAKEN',
  MISSED: 'MISSED'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicationSchedule`: Exposes CRUD operations for the **MedicationSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicationSchedules
    * const medicationSchedules = await prisma.medicationSchedule.findMany()
    * ```
    */
  get medicationSchedule(): Prisma.MedicationScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalHistory`: Exposes CRUD operations for the **MedicalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalHistories
    * const medicalHistories = await prisma.medicalHistory.findMany()
    * ```
    */
  get medicalHistory(): Prisma.MedicalHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Medication: 'Medication',
    MedicationSchedule: 'MedicationSchedule',
    MedicalHistory: 'MedicalHistory'
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
      modelProps: "user" | "medication" | "medicationSchedule" | "medicalHistory"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MedicationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MedicationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      MedicationSchedule: {
        payload: Prisma.$MedicationSchedulePayload<ExtArgs>
        fields: Prisma.MedicationScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          findFirst: {
            args: Prisma.MedicationScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          findMany: {
            args: Prisma.MedicationScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>[]
          }
          create: {
            args: Prisma.MedicationScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          createMany: {
            args: Prisma.MedicationScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicationScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          update: {
            args: Prisma.MedicationScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          deleteMany: {
            args: Prisma.MedicationScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicationScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          aggregate: {
            args: Prisma.MedicationScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicationSchedule>
          }
          groupBy: {
            args: Prisma.MedicationScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationScheduleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MedicationScheduleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MedicationScheduleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MedicationScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationScheduleCountAggregateOutputType> | number
          }
        }
      }
      MedicalHistory: {
        payload: Prisma.$MedicalHistoryPayload<ExtArgs>
        fields: Prisma.MedicalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findFirst: {
            args: Prisma.MedicalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findMany: {
            args: Prisma.MedicalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          create: {
            args: Prisma.MedicalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          createMany: {
            args: Prisma.MedicalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          update: {
            args: Prisma.MedicalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          aggregate: {
            args: Prisma.MedicalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalHistory>
          }
          groupBy: {
            args: Prisma.MedicalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MedicalHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MedicalHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MedicalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    medication?: MedicationOmit
    medicationSchedule?: MedicationScheduleOmit
    medicalHistory?: MedicalHistoryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    medications: number
    medicalHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | UserCountOutputTypeCountMedicationsArgs
    medicalHistory?: boolean | UserCountOutputTypeCountMedicalHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    schedules: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | MedicationCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationScheduleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    medications?: boolean | User$medicationsArgs<ExtArgs>
    medicalHistory?: boolean | User$medicalHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | User$medicationsArgs<ExtArgs>
    medicalHistory?: boolean | User$medicalHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      medicalHistory: Prisma.$MedicalHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends User$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalHistory<T extends User$medicalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$medicalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.medications
   */
  export type User$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * User.medicalHistory
   */
  export type User$medicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    cursor?: MedicalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    instructions: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    instructions: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    name: number
    dosage: number
    instructions: number
    createdAt: number
    userId: number
    _all: number
  }


  export type MedicationMinAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    instructions?: true
    createdAt?: true
    userId?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    instructions?: true
    createdAt?: true
    userId?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    instructions?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    name: string
    dosage: string
    instructions: string
    createdAt: Date
    userId: string
    _count: MedicationCountAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    instructions?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>



  export type MedicationSelectScalar = {
    id?: boolean
    name?: boolean
    dosage?: boolean
    instructions?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dosage" | "instructions" | "createdAt" | "userId", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      schedules: Prisma.$MedicationSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dosage: string
      instructions: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * @param {MedicationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const medication = await prisma.medication.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MedicationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Medication.
     * @param {MedicationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const medication = await prisma.medication.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MedicationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Medication$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Medication$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly dosage: FieldRef<"Medication", 'String'>
    readonly instructions: FieldRef<"Medication", 'String'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly userId: FieldRef<"Medication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication findRaw
   */
  export type MedicationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Medication aggregateRaw
   */
  export type MedicationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Medication.schedules
   */
  export type Medication$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    where?: MedicationScheduleWhereInput
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    cursor?: MedicationScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model MedicationSchedule
   */

  export type AggregateMedicationSchedule = {
    _count: MedicationScheduleCountAggregateOutputType | null
    _min: MedicationScheduleMinAggregateOutputType | null
    _max: MedicationScheduleMaxAggregateOutputType | null
  }

  export type MedicationScheduleMinAggregateOutputType = {
    id: string | null
    dateTime: Date | null
    status: $Enums.ScheduleStatus | null
    medicationId: string | null
  }

  export type MedicationScheduleMaxAggregateOutputType = {
    id: string | null
    dateTime: Date | null
    status: $Enums.ScheduleStatus | null
    medicationId: string | null
  }

  export type MedicationScheduleCountAggregateOutputType = {
    id: number
    dateTime: number
    status: number
    medicationId: number
    _all: number
  }


  export type MedicationScheduleMinAggregateInputType = {
    id?: true
    dateTime?: true
    status?: true
    medicationId?: true
  }

  export type MedicationScheduleMaxAggregateInputType = {
    id?: true
    dateTime?: true
    status?: true
    medicationId?: true
  }

  export type MedicationScheduleCountAggregateInputType = {
    id?: true
    dateTime?: true
    status?: true
    medicationId?: true
    _all?: true
  }

  export type MedicationScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationSchedule to aggregate.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicationSchedules
    **/
    _count?: true | MedicationScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationScheduleMaxAggregateInputType
  }

  export type GetMedicationScheduleAggregateType<T extends MedicationScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicationSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicationSchedule[P]>
      : GetScalarType<T[P], AggregateMedicationSchedule[P]>
  }




  export type MedicationScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationScheduleWhereInput
    orderBy?: MedicationScheduleOrderByWithAggregationInput | MedicationScheduleOrderByWithAggregationInput[]
    by: MedicationScheduleScalarFieldEnum[] | MedicationScheduleScalarFieldEnum
    having?: MedicationScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationScheduleCountAggregateInputType | true
    _min?: MedicationScheduleMinAggregateInputType
    _max?: MedicationScheduleMaxAggregateInputType
  }

  export type MedicationScheduleGroupByOutputType = {
    id: string
    dateTime: Date
    status: $Enums.ScheduleStatus
    medicationId: string
    _count: MedicationScheduleCountAggregateOutputType | null
    _min: MedicationScheduleMinAggregateOutputType | null
    _max: MedicationScheduleMaxAggregateOutputType | null
  }

  type GetMedicationScheduleGroupByPayload<T extends MedicationScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationScheduleGroupByOutputType[P]>
        }
      >
    >


  export type MedicationScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateTime?: boolean
    status?: boolean
    medicationId?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationSchedule"]>



  export type MedicationScheduleSelectScalar = {
    id?: boolean
    dateTime?: boolean
    status?: boolean
    medicationId?: boolean
  }

  export type MedicationScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateTime" | "status" | "medicationId", ExtArgs["result"]["medicationSchedule"]>
  export type MedicationScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $MedicationSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicationSchedule"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dateTime: Date
      status: $Enums.ScheduleStatus
      medicationId: string
    }, ExtArgs["result"]["medicationSchedule"]>
    composites: {}
  }

  type MedicationScheduleGetPayload<S extends boolean | null | undefined | MedicationScheduleDefaultArgs> = $Result.GetResult<Prisma.$MedicationSchedulePayload, S>

  type MedicationScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationScheduleCountAggregateInputType | true
    }

  export interface MedicationScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicationSchedule'], meta: { name: 'MedicationSchedule' } }
    /**
     * Find zero or one MedicationSchedule that matches the filter.
     * @param {MedicationScheduleFindUniqueArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationScheduleFindUniqueArgs>(args: SelectSubset<T, MedicationScheduleFindUniqueArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicationSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationScheduleFindUniqueOrThrowArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleFindFirstArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationScheduleFindFirstArgs>(args?: SelectSubset<T, MedicationScheduleFindFirstArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleFindFirstOrThrowArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicationSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicationSchedules
     * const medicationSchedules = await prisma.medicationSchedule.findMany()
     * 
     * // Get first 10 MedicationSchedules
     * const medicationSchedules = await prisma.medicationSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationScheduleWithIdOnly = await prisma.medicationSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationScheduleFindManyArgs>(args?: SelectSubset<T, MedicationScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicationSchedule.
     * @param {MedicationScheduleCreateArgs} args - Arguments to create a MedicationSchedule.
     * @example
     * // Create one MedicationSchedule
     * const MedicationSchedule = await prisma.medicationSchedule.create({
     *   data: {
     *     // ... data to create a MedicationSchedule
     *   }
     * })
     * 
     */
    create<T extends MedicationScheduleCreateArgs>(args: SelectSubset<T, MedicationScheduleCreateArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicationSchedules.
     * @param {MedicationScheduleCreateManyArgs} args - Arguments to create many MedicationSchedules.
     * @example
     * // Create many MedicationSchedules
     * const medicationSchedule = await prisma.medicationSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationScheduleCreateManyArgs>(args?: SelectSubset<T, MedicationScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicationSchedule.
     * @param {MedicationScheduleDeleteArgs} args - Arguments to delete one MedicationSchedule.
     * @example
     * // Delete one MedicationSchedule
     * const MedicationSchedule = await prisma.medicationSchedule.delete({
     *   where: {
     *     // ... filter to delete one MedicationSchedule
     *   }
     * })
     * 
     */
    delete<T extends MedicationScheduleDeleteArgs>(args: SelectSubset<T, MedicationScheduleDeleteArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicationSchedule.
     * @param {MedicationScheduleUpdateArgs} args - Arguments to update one MedicationSchedule.
     * @example
     * // Update one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationScheduleUpdateArgs>(args: SelectSubset<T, MedicationScheduleUpdateArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicationSchedules.
     * @param {MedicationScheduleDeleteManyArgs} args - Arguments to filter MedicationSchedules to delete.
     * @example
     * // Delete a few MedicationSchedules
     * const { count } = await prisma.medicationSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationScheduleDeleteManyArgs>(args?: SelectSubset<T, MedicationScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicationSchedules
     * const medicationSchedule = await prisma.medicationSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationScheduleUpdateManyArgs>(args: SelectSubset<T, MedicationScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicationSchedule.
     * @param {MedicationScheduleUpsertArgs} args - Arguments to update or create a MedicationSchedule.
     * @example
     * // Update or create a MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.upsert({
     *   create: {
     *     // ... data to create a MedicationSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicationSchedule we want to update
     *   }
     * })
     */
    upsert<T extends MedicationScheduleUpsertArgs>(args: SelectSubset<T, MedicationScheduleUpsertArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicationSchedules that matches the filter.
     * @param {MedicationScheduleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const medicationSchedule = await prisma.medicationSchedule.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MedicationScheduleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MedicationSchedule.
     * @param {MedicationScheduleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const medicationSchedule = await prisma.medicationSchedule.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MedicationScheduleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MedicationSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleCountArgs} args - Arguments to filter MedicationSchedules to count.
     * @example
     * // Count the number of MedicationSchedules
     * const count = await prisma.medicationSchedule.count({
     *   where: {
     *     // ... the filter for the MedicationSchedules we want to count
     *   }
     * })
    **/
    count<T extends MedicationScheduleCountArgs>(
      args?: Subset<T, MedicationScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicationSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationScheduleAggregateArgs>(args: Subset<T, MedicationScheduleAggregateArgs>): Prisma.PrismaPromise<GetMedicationScheduleAggregateType<T>>

    /**
     * Group by MedicationSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleGroupByArgs} args - Group by arguments.
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
      T extends MedicationScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationScheduleGroupByArgs['orderBy'] }
        : { orderBy?: MedicationScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicationSchedule model
   */
  readonly fields: MedicationScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicationSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicationSchedule model
   */
  interface MedicationScheduleFieldRefs {
    readonly id: FieldRef<"MedicationSchedule", 'String'>
    readonly dateTime: FieldRef<"MedicationSchedule", 'DateTime'>
    readonly status: FieldRef<"MedicationSchedule", 'ScheduleStatus'>
    readonly medicationId: FieldRef<"MedicationSchedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicationSchedule findUnique
   */
  export type MedicationScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule findUniqueOrThrow
   */
  export type MedicationScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule findFirst
   */
  export type MedicationScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationSchedules.
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationSchedules.
     */
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * MedicationSchedule findFirstOrThrow
   */
  export type MedicationScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationSchedules.
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationSchedules.
     */
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * MedicationSchedule findMany
   */
  export type MedicationScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedules to fetch.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicationSchedules.
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * MedicationSchedule create
   */
  export type MedicationScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicationSchedule.
     */
    data: XOR<MedicationScheduleCreateInput, MedicationScheduleUncheckedCreateInput>
  }

  /**
   * MedicationSchedule createMany
   */
  export type MedicationScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicationSchedules.
     */
    data: MedicationScheduleCreateManyInput | MedicationScheduleCreateManyInput[]
  }

  /**
   * MedicationSchedule update
   */
  export type MedicationScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicationSchedule.
     */
    data: XOR<MedicationScheduleUpdateInput, MedicationScheduleUncheckedUpdateInput>
    /**
     * Choose, which MedicationSchedule to update.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule updateMany
   */
  export type MedicationScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicationSchedules.
     */
    data: XOR<MedicationScheduleUpdateManyMutationInput, MedicationScheduleUncheckedUpdateManyInput>
    /**
     * Filter which MedicationSchedules to update
     */
    where?: MedicationScheduleWhereInput
    /**
     * Limit how many MedicationSchedules to update.
     */
    limit?: number
  }

  /**
   * MedicationSchedule upsert
   */
  export type MedicationScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicationSchedule to update in case it exists.
     */
    where: MedicationScheduleWhereUniqueInput
    /**
     * In case the MedicationSchedule found by the `where` argument doesn't exist, create a new MedicationSchedule with this data.
     */
    create: XOR<MedicationScheduleCreateInput, MedicationScheduleUncheckedCreateInput>
    /**
     * In case the MedicationSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationScheduleUpdateInput, MedicationScheduleUncheckedUpdateInput>
  }

  /**
   * MedicationSchedule delete
   */
  export type MedicationScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter which MedicationSchedule to delete.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule deleteMany
   */
  export type MedicationScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationSchedules to delete
     */
    where?: MedicationScheduleWhereInput
    /**
     * Limit how many MedicationSchedules to delete.
     */
    limit?: number
  }

  /**
   * MedicationSchedule findRaw
   */
  export type MedicationScheduleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MedicationSchedule aggregateRaw
   */
  export type MedicationScheduleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MedicationSchedule without action
   */
  export type MedicationScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationSchedule
     */
    omit?: MedicationScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
  }


  /**
   * Model MedicalHistory
   */

  export type AggregateMedicalHistory = {
    _count: MedicalHistoryCountAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  export type MedicalHistoryMinAggregateOutputType = {
    id: string | null
    condition: string | null
    notes: string | null
    date: Date | null
    userId: string | null
  }

  export type MedicalHistoryMaxAggregateOutputType = {
    id: string | null
    condition: string | null
    notes: string | null
    date: Date | null
    userId: string | null
  }

  export type MedicalHistoryCountAggregateOutputType = {
    id: number
    condition: number
    notes: number
    date: number
    userId: number
    _all: number
  }


  export type MedicalHistoryMinAggregateInputType = {
    id?: true
    condition?: true
    notes?: true
    date?: true
    userId?: true
  }

  export type MedicalHistoryMaxAggregateInputType = {
    id?: true
    condition?: true
    notes?: true
    date?: true
    userId?: true
  }

  export type MedicalHistoryCountAggregateInputType = {
    id?: true
    condition?: true
    notes?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type MedicalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistory to aggregate.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalHistories
    **/
    _count?: true | MedicalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type GetMedicalHistoryAggregateType<T extends MedicalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalHistory[P]>
      : GetScalarType<T[P], AggregateMedicalHistory[P]>
  }




  export type MedicalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithAggregationInput | MedicalHistoryOrderByWithAggregationInput[]
    by: MedicalHistoryScalarFieldEnum[] | MedicalHistoryScalarFieldEnum
    having?: MedicalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalHistoryCountAggregateInputType | true
    _min?: MedicalHistoryMinAggregateInputType
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type MedicalHistoryGroupByOutputType = {
    id: string
    condition: string
    notes: string | null
    date: Date
    userId: string
    _count: MedicalHistoryCountAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  type GetMedicalHistoryGroupByPayload<T extends MedicalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    condition?: boolean
    notes?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>



  export type MedicalHistorySelectScalar = {
    id?: boolean
    condition?: boolean
    notes?: boolean
    date?: boolean
    userId?: boolean
  }

  export type MedicalHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "condition" | "notes" | "date" | "userId", ExtArgs["result"]["medicalHistory"]>
  export type MedicalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedicalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      condition: string
      notes: string | null
      date: Date
      userId: string
    }, ExtArgs["result"]["medicalHistory"]>
    composites: {}
  }

  type MedicalHistoryGetPayload<S extends boolean | null | undefined | MedicalHistoryDefaultArgs> = $Result.GetResult<Prisma.$MedicalHistoryPayload, S>

  type MedicalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalHistoryCountAggregateInputType | true
    }

  export interface MedicalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalHistory'], meta: { name: 'MedicalHistory' } }
    /**
     * Find zero or one MedicalHistory that matches the filter.
     * @param {MedicalHistoryFindUniqueArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalHistoryFindUniqueArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalHistoryFindUniqueOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalHistoryFindFirstArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany()
     * 
     * // Get first 10 MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalHistoryWithIdOnly = await prisma.medicalHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalHistoryFindManyArgs>(args?: SelectSubset<T, MedicalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalHistory.
     * @param {MedicalHistoryCreateArgs} args - Arguments to create a MedicalHistory.
     * @example
     * // Create one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.create({
     *   data: {
     *     // ... data to create a MedicalHistory
     *   }
     * })
     * 
     */
    create<T extends MedicalHistoryCreateArgs>(args: SelectSubset<T, MedicalHistoryCreateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalHistories.
     * @param {MedicalHistoryCreateManyArgs} args - Arguments to create many MedicalHistories.
     * @example
     * // Create many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalHistoryCreateManyArgs>(args?: SelectSubset<T, MedicalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalHistory.
     * @param {MedicalHistoryDeleteArgs} args - Arguments to delete one MedicalHistory.
     * @example
     * // Delete one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.delete({
     *   where: {
     *     // ... filter to delete one MedicalHistory
     *   }
     * })
     * 
     */
    delete<T extends MedicalHistoryDeleteArgs>(args: SelectSubset<T, MedicalHistoryDeleteArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalHistory.
     * @param {MedicalHistoryUpdateArgs} args - Arguments to update one MedicalHistory.
     * @example
     * // Update one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalHistoryUpdateArgs>(args: SelectSubset<T, MedicalHistoryUpdateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalHistories.
     * @param {MedicalHistoryDeleteManyArgs} args - Arguments to filter MedicalHistories to delete.
     * @example
     * // Delete a few MedicalHistories
     * const { count } = await prisma.medicalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalHistoryDeleteManyArgs>(args?: SelectSubset<T, MedicalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalHistoryUpdateManyArgs>(args: SelectSubset<T, MedicalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalHistory.
     * @param {MedicalHistoryUpsertArgs} args - Arguments to update or create a MedicalHistory.
     * @example
     * // Update or create a MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.upsert({
     *   create: {
     *     // ... data to create a MedicalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalHistory we want to update
     *   }
     * })
     */
    upsert<T extends MedicalHistoryUpsertArgs>(args: SelectSubset<T, MedicalHistoryUpsertArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalHistories that matches the filter.
     * @param {MedicalHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const medicalHistory = await prisma.medicalHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MedicalHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MedicalHistory.
     * @param {MedicalHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const medicalHistory = await prisma.medicalHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MedicalHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryCountArgs} args - Arguments to filter MedicalHistories to count.
     * @example
     * // Count the number of MedicalHistories
     * const count = await prisma.medicalHistory.count({
     *   where: {
     *     // ... the filter for the MedicalHistories we want to count
     *   }
     * })
    **/
    count<T extends MedicalHistoryCountArgs>(
      args?: Subset<T, MedicalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalHistoryAggregateArgs>(args: Subset<T, MedicalHistoryAggregateArgs>): Prisma.PrismaPromise<GetMedicalHistoryAggregateType<T>>

    /**
     * Group by MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryGroupByArgs} args - Group by arguments.
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
      T extends MedicalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicalHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalHistory model
   */
  readonly fields: MedicalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalHistory model
   */
  interface MedicalHistoryFieldRefs {
    readonly id: FieldRef<"MedicalHistory", 'String'>
    readonly condition: FieldRef<"MedicalHistory", 'String'>
    readonly notes: FieldRef<"MedicalHistory", 'String'>
    readonly date: FieldRef<"MedicalHistory", 'DateTime'>
    readonly userId: FieldRef<"MedicalHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicalHistory findUnique
   */
  export type MedicalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findUniqueOrThrow
   */
  export type MedicalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findFirst
   */
  export type MedicalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findFirstOrThrow
   */
  export type MedicalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findMany
   */
  export type MedicalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistories to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory create
   */
  export type MedicalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalHistory.
     */
    data: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
  }

  /**
   * MedicalHistory createMany
   */
  export type MedicalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalHistories.
     */
    data: MedicalHistoryCreateManyInput | MedicalHistoryCreateManyInput[]
  }

  /**
   * MedicalHistory update
   */
  export type MedicalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalHistory.
     */
    data: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
    /**
     * Choose, which MedicalHistory to update.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory updateMany
   */
  export type MedicalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalHistories.
     */
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalHistories to update
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to update.
     */
    limit?: number
  }

  /**
   * MedicalHistory upsert
   */
  export type MedicalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalHistory to update in case it exists.
     */
    where: MedicalHistoryWhereUniqueInput
    /**
     * In case the MedicalHistory found by the `where` argument doesn't exist, create a new MedicalHistory with this data.
     */
    create: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
    /**
     * In case the MedicalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
  }

  /**
   * MedicalHistory delete
   */
  export type MedicalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter which MedicalHistory to delete.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory deleteMany
   */
  export type MedicalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistories to delete
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to delete.
     */
    limit?: number
  }

  /**
   * MedicalHistory findRaw
   */
  export type MedicalHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MedicalHistory aggregateRaw
   */
  export type MedicalHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MedicalHistory without action
   */
  export type MedicalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dosage: 'dosage',
    instructions: 'instructions',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const MedicationScheduleScalarFieldEnum: {
    id: 'id',
    dateTime: 'dateTime',
    status: 'status',
    medicationId: 'medicationId'
  };

  export type MedicationScheduleScalarFieldEnum = (typeof MedicationScheduleScalarFieldEnum)[keyof typeof MedicationScheduleScalarFieldEnum]


  export const MedicalHistoryScalarFieldEnum: {
    id: 'id',
    condition: 'condition',
    notes: 'notes',
    date: 'date',
    userId: 'userId'
  };

  export type MedicalHistoryScalarFieldEnum = (typeof MedicalHistoryScalarFieldEnum)[keyof typeof MedicalHistoryScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus[]'
   */
  export type ListEnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    medications?: MedicationListRelationFilter
    medicalHistory?: MedicalHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    medications?: MedicationOrderByRelationAggregateInput
    medicalHistory?: MedicalHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    medications?: MedicationListRelationFilter
    medicalHistory?: MedicalHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    instructions?: StringFilter<"Medication"> | string
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    userId?: StringFilter<"Medication"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedules?: MedicationScheduleListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    schedules?: MedicationScheduleOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    instructions?: StringFilter<"Medication"> | string
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    userId?: StringFilter<"Medication"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedules?: MedicationScheduleListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    dosage?: StringWithAggregatesFilter<"Medication"> | string
    instructions?: StringWithAggregatesFilter<"Medication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    userId?: StringWithAggregatesFilter<"Medication"> | string
  }

  export type MedicationScheduleWhereInput = {
    AND?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    OR?: MedicationScheduleWhereInput[]
    NOT?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    id?: StringFilter<"MedicationSchedule"> | string
    dateTime?: DateTimeFilter<"MedicationSchedule"> | Date | string
    status?: EnumScheduleStatusFilter<"MedicationSchedule"> | $Enums.ScheduleStatus
    medicationId?: StringFilter<"MedicationSchedule"> | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }

  export type MedicationScheduleOrderByWithRelationInput = {
    id?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    medicationId?: SortOrder
    medication?: MedicationOrderByWithRelationInput
  }

  export type MedicationScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    OR?: MedicationScheduleWhereInput[]
    NOT?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    dateTime?: DateTimeFilter<"MedicationSchedule"> | Date | string
    status?: EnumScheduleStatusFilter<"MedicationSchedule"> | $Enums.ScheduleStatus
    medicationId?: StringFilter<"MedicationSchedule"> | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }, "id">

  export type MedicationScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    medicationId?: SortOrder
    _count?: MedicationScheduleCountOrderByAggregateInput
    _max?: MedicationScheduleMaxOrderByAggregateInput
    _min?: MedicationScheduleMinOrderByAggregateInput
  }

  export type MedicationScheduleScalarWhereWithAggregatesInput = {
    AND?: MedicationScheduleScalarWhereWithAggregatesInput | MedicationScheduleScalarWhereWithAggregatesInput[]
    OR?: MedicationScheduleScalarWhereWithAggregatesInput[]
    NOT?: MedicationScheduleScalarWhereWithAggregatesInput | MedicationScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicationSchedule"> | string
    dateTime?: DateTimeWithAggregatesFilter<"MedicationSchedule"> | Date | string
    status?: EnumScheduleStatusWithAggregatesFilter<"MedicationSchedule"> | $Enums.ScheduleStatus
    medicationId?: StringWithAggregatesFilter<"MedicationSchedule"> | string
  }

  export type MedicalHistoryWhereInput = {
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    id?: StringFilter<"MedicalHistory"> | string
    condition?: StringFilter<"MedicalHistory"> | string
    notes?: StringNullableFilter<"MedicalHistory"> | string | null
    date?: DateTimeFilter<"MedicalHistory"> | Date | string
    userId?: StringFilter<"MedicalHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MedicalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MedicalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    condition?: StringFilter<"MedicalHistory"> | string
    notes?: StringNullableFilter<"MedicalHistory"> | string | null
    date?: DateTimeFilter<"MedicalHistory"> | Date | string
    userId?: StringFilter<"MedicalHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MedicalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: MedicalHistoryCountOrderByAggregateInput
    _max?: MedicalHistoryMaxOrderByAggregateInput
    _min?: MedicalHistoryMinOrderByAggregateInput
  }

  export type MedicalHistoryScalarWhereWithAggregatesInput = {
    AND?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    OR?: MedicalHistoryScalarWhereWithAggregatesInput[]
    NOT?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalHistory"> | string
    condition?: StringWithAggregatesFilter<"MedicalHistory"> | string
    notes?: StringNullableWithAggregatesFilter<"MedicalHistory"> | string | null
    date?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
    userId?: StringWithAggregatesFilter<"MedicalHistory"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    medications?: MedicationCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    medications?: MedicationUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationsInput
    schedules?: MedicationScheduleCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    userId: string
    schedules?: MedicationScheduleUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationsNestedInput
    schedules?: MedicationScheduleUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    schedules?: MedicationScheduleUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    userId: string
  }

  export type MedicationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationScheduleCreateInput = {
    id?: string
    dateTime: Date | string
    status?: $Enums.ScheduleStatus
    medication: MedicationCreateNestedOneWithoutSchedulesInput
  }

  export type MedicationScheduleUncheckedCreateInput = {
    id?: string
    dateTime: Date | string
    status?: $Enums.ScheduleStatus
    medicationId: string
  }

  export type MedicationScheduleUpdateInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    medication?: MedicationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type MedicationScheduleUncheckedUpdateInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    medicationId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationScheduleCreateManyInput = {
    id?: string
    dateTime: Date | string
    status?: $Enums.ScheduleStatus
    medicationId: string
  }

  export type MedicationScheduleUpdateManyMutationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type MedicationScheduleUncheckedUpdateManyInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    medicationId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalHistoryCreateInput = {
    id?: string
    condition: string
    notes?: string | null
    date?: Date | string
    user: UserCreateNestedOneWithoutMedicalHistoryInput
  }

  export type MedicalHistoryUncheckedCreateInput = {
    id?: string
    condition: string
    notes?: string | null
    date?: Date | string
    userId: string
  }

  export type MedicalHistoryUpdateInput = {
    condition?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicalHistoryNestedInput
  }

  export type MedicalHistoryUncheckedUpdateInput = {
    condition?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalHistoryCreateManyInput = {
    id?: string
    condition: string
    notes?: string | null
    date?: Date | string
    userId: string
  }

  export type MedicalHistoryUpdateManyMutationInput = {
    condition?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateManyInput = {
    condition?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type MedicalHistoryListRelationFilter = {
    every?: MedicalHistoryWhereInput
    some?: MedicalHistoryWhereInput
    none?: MedicalHistoryWhereInput
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MedicationScheduleListRelationFilter = {
    every?: MedicationScheduleWhereInput
    some?: MedicationScheduleWhereInput
    none?: MedicationScheduleWhereInput
  }

  export type MedicationScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
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

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type MedicationScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    medicationId?: SortOrder
  }

  export type MedicationScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    medicationId?: SortOrder
  }

  export type MedicationScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    medicationId?: SortOrder
  }

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type MedicalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type MedicalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type MedicalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    userId?: SortOrder
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
    isSet?: boolean
  }

  export type MedicationCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicalHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicalHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type MedicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutUserInput | MedicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutUserInput | MedicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutUserInput | MedicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicalHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutUserInput | MedicalHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutUserInput | MedicalHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutUserInput | MedicalHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutUserInput | MedicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutUserInput | MedicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutUserInput | MedicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutUserInput | MedicalHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutUserInput | MedicalHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutUserInput | MedicalHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicationScheduleCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
  }

  export type MedicationScheduleUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationsInput
    upsert?: UserUpsertWithoutMedicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicationsInput, UserUpdateWithoutMedicationsInput>, UserUncheckedUpdateWithoutMedicationsInput>
  }

  export type MedicationScheduleUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    set?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    disconnect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    delete?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    update?: MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationScheduleUpdateManyWithWhereWithoutMedicationInput | MedicationScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
  }

  export type MedicationScheduleUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    set?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    disconnect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    delete?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    update?: MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationScheduleUpdateManyWithWhereWithoutMedicationInput | MedicationScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
  }

  export type MedicationCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type MedicationUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    upsert?: MedicationUpsertWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutSchedulesInput, MedicationUpdateWithoutSchedulesInput>, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserCreateNestedOneWithoutMedicalHistoryInput = {
    create?: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutMedicalHistoryNestedInput = {
    create?: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalHistoryInput
    upsert?: UserUpsertWithoutMedicalHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicalHistoryInput, UserUpdateWithoutMedicalHistoryInput>, UserUncheckedUpdateWithoutMedicalHistoryInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type MedicationCreateWithoutUserInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    schedules?: MedicationScheduleCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    schedules?: MedicationScheduleUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutUserInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput>
  }

  export type MedicationCreateManyUserInputEnvelope = {
    data: MedicationCreateManyUserInput | MedicationCreateManyUserInput[]
  }

  export type MedicalHistoryCreateWithoutUserInput = {
    id?: string
    condition: string
    notes?: string | null
    date?: Date | string
  }

  export type MedicalHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    condition: string
    notes?: string | null
    date?: Date | string
  }

  export type MedicalHistoryCreateOrConnectWithoutUserInput = {
    where: MedicalHistoryWhereUniqueInput
    create: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput>
  }

  export type MedicalHistoryCreateManyUserInputEnvelope = {
    data: MedicalHistoryCreateManyUserInput | MedicalHistoryCreateManyUserInput[]
  }

  export type MedicationUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutUserInput, MedicationUncheckedUpdateWithoutUserInput>
    create: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutUserInput, MedicationUncheckedUpdateWithoutUserInput>
  }

  export type MedicationUpdateManyWithWhereWithoutUserInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    instructions?: StringFilter<"Medication"> | string
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    userId?: StringFilter<"Medication"> | string
  }

  export type MedicalHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicalHistoryWhereUniqueInput
    update: XOR<MedicalHistoryUpdateWithoutUserInput, MedicalHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput>
  }

  export type MedicalHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicalHistoryWhereUniqueInput
    data: XOR<MedicalHistoryUpdateWithoutUserInput, MedicalHistoryUncheckedUpdateWithoutUserInput>
  }

  export type MedicalHistoryUpdateManyWithWhereWithoutUserInput = {
    where: MedicalHistoryScalarWhereInput
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicalHistoryScalarWhereInput = {
    AND?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    OR?: MedicalHistoryScalarWhereInput[]
    NOT?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    id?: StringFilter<"MedicalHistory"> | string
    condition?: StringFilter<"MedicalHistory"> | string
    notes?: StringNullableFilter<"MedicalHistory"> | string | null
    date?: DateTimeFilter<"MedicalHistory"> | Date | string
    userId?: StringFilter<"MedicalHistory"> | string
  }

  export type UserCreateWithoutMedicationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    medicalHistory?: MedicalHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    medicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
  }

  export type MedicationScheduleCreateWithoutMedicationInput = {
    id?: string
    dateTime: Date | string
    status?: $Enums.ScheduleStatus
  }

  export type MedicationScheduleUncheckedCreateWithoutMedicationInput = {
    id?: string
    dateTime: Date | string
    status?: $Enums.ScheduleStatus
  }

  export type MedicationScheduleCreateOrConnectWithoutMedicationInput = {
    where: MedicationScheduleWhereUniqueInput
    create: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationScheduleCreateManyMedicationInputEnvelope = {
    data: MedicationScheduleCreateManyMedicationInput | MedicationScheduleCreateManyMedicationInput[]
  }

  export type UserUpsertWithoutMedicationsInput = {
    update: XOR<UserUpdateWithoutMedicationsInput, UserUncheckedUpdateWithoutMedicationsInput>
    create: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicationsInput, UserUncheckedUpdateWithoutMedicationsInput>
  }

  export type UserUpdateWithoutMedicationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    medicalHistory?: MedicalHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    medicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput = {
    where: MedicationScheduleWhereUniqueInput
    update: XOR<MedicationScheduleUpdateWithoutMedicationInput, MedicationScheduleUncheckedUpdateWithoutMedicationInput>
    create: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput = {
    where: MedicationScheduleWhereUniqueInput
    data: XOR<MedicationScheduleUpdateWithoutMedicationInput, MedicationScheduleUncheckedUpdateWithoutMedicationInput>
  }

  export type MedicationScheduleUpdateManyWithWhereWithoutMedicationInput = {
    where: MedicationScheduleScalarWhereInput
    data: XOR<MedicationScheduleUpdateManyMutationInput, MedicationScheduleUncheckedUpdateManyWithoutMedicationInput>
  }

  export type MedicationScheduleScalarWhereInput = {
    AND?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
    OR?: MedicationScheduleScalarWhereInput[]
    NOT?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
    id?: StringFilter<"MedicationSchedule"> | string
    dateTime?: DateTimeFilter<"MedicationSchedule"> | Date | string
    status?: EnumScheduleStatusFilter<"MedicationSchedule"> | $Enums.ScheduleStatus
    medicationId?: StringFilter<"MedicationSchedule"> | string
  }

  export type MedicationCreateWithoutSchedulesInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    userId: string
  }

  export type MedicationCreateOrConnectWithoutSchedulesInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
  }

  export type MedicationUpsertWithoutSchedulesInput = {
    update: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type MedicationUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutMedicalHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    medications?: MedicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicalHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicalHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
  }

  export type UserUpsertWithoutMedicalHistoryInput = {
    update: XOR<UserUpdateWithoutMedicalHistoryInput, UserUncheckedUpdateWithoutMedicalHistoryInput>
    create: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicalHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicalHistoryInput, UserUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type UserUpdateWithoutMedicalHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    medications?: MedicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicalHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicationCreateManyUserInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
  }

  export type MedicalHistoryCreateManyUserInput = {
    id?: string
    condition: string
    notes?: string | null
    date?: Date | string
  }

  export type MedicationUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MedicationScheduleUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MedicationScheduleUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUpdateWithoutUserInput = {
    condition?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateWithoutUserInput = {
    condition?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutUserInput = {
    condition?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationScheduleCreateManyMedicationInput = {
    id?: string
    dateTime: Date | string
    status?: $Enums.ScheduleStatus
  }

  export type MedicationScheduleUpdateWithoutMedicationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type MedicationScheduleUncheckedUpdateWithoutMedicationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type MedicationScheduleUncheckedUpdateManyWithoutMedicationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
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