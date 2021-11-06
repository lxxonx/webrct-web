import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Class = {
  __typename?: 'Class';
  id: Scalars['ID'];
  isCreated: Scalars['Boolean'];
  messages: Array<Message>;
  schedule: Scalars['DateTime'];
  student?: Maybe<Student>;
  studentId?: Maybe<Scalars['Float']>;
  tutor: Tutor;
  tutorId: Scalars['Float'];
  videoUrl?: Maybe<Scalars['String']>;
};

export type GetManyTutorsInput = {
  saved?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type LoginInput = {
  isTutor?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  class: Class;
  classId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClass: Class;
  createStudent: Student;
  createTutor: Tutor;
  loginStudent: Student;
  loginTutor: Tutor;
  logout: Scalars['Boolean'];
};


export type MutationCreateClassArgs = {
  schedule: Scalars['DateTime'];
};


export type MutationCreateStudentArgs = {
  newStudentData: NewUserInput;
};


export type MutationCreateTutorArgs = {
  newTutorData: NewUserInput;
};


export type MutationLoginStudentArgs = {
  loginInput: LoginInput;
};


export type MutationLoginTutorArgs = {
  loginInput: LoginInput;
};

export type NewUserInput = {
  birthYear: Scalars['Float'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getManyClasses: Array<Class>;
  getManyClassesByTutor: Array<Class>;
  getManyTutors: Array<Tutor>;
  getStudentById: Student;
  getTutorById: Tutor;
  me: Tutor;
};


export type QueryGetManyClassesArgs = {
  monday: Scalars['DateTime'];
};


export type QueryGetManyTutorsArgs = {
  getManyTutorsInput: GetManyTutorsInput;
};


export type QueryGetStudentByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetTutorByIdArgs = {
  id: Scalars['Float'];
};

export type Student = {
  __typename?: 'Student';
  birthYear: Scalars['Float'];
  classes?: Maybe<Array<Class>>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  leftClass: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['ID'];
};

export type Tutor = {
  __typename?: 'Tutor';
  birthYear: Scalars['Float'];
  classes?: Maybe<Array<Class>>;
  createdAt: Scalars['DateTime'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type CreateClassMutationVariables = Exact<{
  schedule: Scalars['DateTime'];
}>;


export type CreateClassMutation = { __typename?: 'Mutation', createClass: { __typename?: 'Class', schedule: any } };

export type GetClassesQueryVariables = Exact<{
  monday: Scalars['DateTime'];
}>;


export type GetClassesQuery = { __typename?: 'Query', getManyClasses: Array<{ __typename?: 'Class', id: string, schedule: any }> };

export type GetManyClassesByTutorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetManyClassesByTutorQuery = { __typename?: 'Query', getManyClassesByTutor: Array<{ __typename?: 'Class', id: string, tutor: { __typename?: 'Tutor', id: string, firstname: string } }> };

export type RegularStudentFragment = { __typename?: 'Student', id: string, username: string, firstname: string, lastname?: string | null | undefined, birthYear: number, leftClass: number };

export type StudentCreateMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  birthYear: Scalars['Float'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
}>;


export type StudentCreateMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'Student', id: string, username: string } };

export type StudentLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type StudentLoginMutation = { __typename?: 'Mutation', loginStudent: { __typename?: 'Student', id: string, username: string, firstname: string, lastname?: string | null | undefined, birthYear: number, leftClass: number } };

export type GetManyTutorsQueryVariables = Exact<{
  take?: Maybe<Scalars['Float']>;
  saved?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Float']>;
}>;


export type GetManyTutorsQuery = { __typename?: 'Query', getManyTutors: Array<{ __typename?: 'Tutor', id: string, username: string, firstname: string, lastname?: string | null | undefined, birthYear: number }> };

export type RegularTutorFragment = { __typename?: 'Tutor', id: string, username: string, firstname: string, lastname?: string | null | undefined, birthYear: number };

export type TutorLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type TutorLoginMutation = { __typename?: 'Mutation', loginTutor: { __typename?: 'Tutor', id: string, username: string, firstname: string, lastname?: string | null | undefined, birthYear: number } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Tutor', id: string, username: string, firstname: string } };

export const RegularStudentFragmentDoc = gql`
    fragment RegularStudent on Student {
  id
  username
  firstname
  lastname
  birthYear
  leftClass
}
    `;
export const RegularTutorFragmentDoc = gql`
    fragment RegularTutor on Tutor {
  id
  username
  firstname
  lastname
  birthYear
}
    `;
export const CreateClassDocument = gql`
    mutation CreateClass($schedule: DateTime!) {
  createClass(schedule: $schedule) {
    schedule
  }
}
    `;
export type CreateClassMutationFn = Apollo.MutationFunction<CreateClassMutation, CreateClassMutationVariables>;
export type CreateClassComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateClassMutation, CreateClassMutationVariables>, 'mutation'>;

    export const CreateClassComponent = (props: CreateClassComponentProps) => (
      <ApolloReactComponents.Mutation<CreateClassMutation, CreateClassMutationVariables> mutation={CreateClassDocument} {...props} />
    );
    

/**
 * __useCreateClassMutation__
 *
 * To run a mutation, you first call `useCreateClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClassMutation, { data, loading, error }] = useCreateClassMutation({
 *   variables: {
 *      schedule: // value for 'schedule'
 *   },
 * });
 */
export function useCreateClassMutation(baseOptions?: Apollo.MutationHookOptions<CreateClassMutation, CreateClassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClassMutation, CreateClassMutationVariables>(CreateClassDocument, options);
      }
export type CreateClassMutationHookResult = ReturnType<typeof useCreateClassMutation>;
export type CreateClassMutationResult = Apollo.MutationResult<CreateClassMutation>;
export type CreateClassMutationOptions = Apollo.BaseMutationOptions<CreateClassMutation, CreateClassMutationVariables>;
export const GetClassesDocument = gql`
    query GetClasses($monday: DateTime!) {
  getManyClasses(monday: $monday) {
    id
    schedule
  }
}
    `;
export type GetClassesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetClassesQuery, GetClassesQueryVariables>, 'query'> & ({ variables: GetClassesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetClassesComponent = (props: GetClassesComponentProps) => (
      <ApolloReactComponents.Query<GetClassesQuery, GetClassesQueryVariables> query={GetClassesDocument} {...props} />
    );
    

/**
 * __useGetClassesQuery__
 *
 * To run a query within a React component, call `useGetClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClassesQuery({
 *   variables: {
 *      monday: // value for 'monday'
 *   },
 * });
 */
export function useGetClassesQuery(baseOptions: Apollo.QueryHookOptions<GetClassesQuery, GetClassesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClassesQuery, GetClassesQueryVariables>(GetClassesDocument, options);
      }
export function useGetClassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClassesQuery, GetClassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClassesQuery, GetClassesQueryVariables>(GetClassesDocument, options);
        }
export type GetClassesQueryHookResult = ReturnType<typeof useGetClassesQuery>;
export type GetClassesLazyQueryHookResult = ReturnType<typeof useGetClassesLazyQuery>;
export type GetClassesQueryResult = Apollo.QueryResult<GetClassesQuery, GetClassesQueryVariables>;
export const GetManyClassesByTutorDocument = gql`
    query GetManyClassesByTutor {
  getManyClassesByTutor {
    id
    tutor {
      id
      firstname
    }
  }
}
    `;
export type GetManyClassesByTutorComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetManyClassesByTutorQuery, GetManyClassesByTutorQueryVariables>, 'query'>;

    export const GetManyClassesByTutorComponent = (props: GetManyClassesByTutorComponentProps) => (
      <ApolloReactComponents.Query<GetManyClassesByTutorQuery, GetManyClassesByTutorQueryVariables> query={GetManyClassesByTutorDocument} {...props} />
    );
    

/**
 * __useGetManyClassesByTutorQuery__
 *
 * To run a query within a React component, call `useGetManyClassesByTutorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManyClassesByTutorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManyClassesByTutorQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetManyClassesByTutorQuery(baseOptions?: Apollo.QueryHookOptions<GetManyClassesByTutorQuery, GetManyClassesByTutorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManyClassesByTutorQuery, GetManyClassesByTutorQueryVariables>(GetManyClassesByTutorDocument, options);
      }
export function useGetManyClassesByTutorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManyClassesByTutorQuery, GetManyClassesByTutorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManyClassesByTutorQuery, GetManyClassesByTutorQueryVariables>(GetManyClassesByTutorDocument, options);
        }
export type GetManyClassesByTutorQueryHookResult = ReturnType<typeof useGetManyClassesByTutorQuery>;
export type GetManyClassesByTutorLazyQueryHookResult = ReturnType<typeof useGetManyClassesByTutorLazyQuery>;
export type GetManyClassesByTutorQueryResult = Apollo.QueryResult<GetManyClassesByTutorQuery, GetManyClassesByTutorQueryVariables>;
export const StudentCreateDocument = gql`
    mutation StudentCreate($username: String!, $password: String!, $birthYear: Float!, $firstname: String!, $lastname: String) {
  createStudent(
    newStudentData: {username: $username, password: $password, birthYear: $birthYear, firstname: $firstname, lastname: $lastname}
  ) {
    id
    username
  }
}
    `;
export type StudentCreateMutationFn = Apollo.MutationFunction<StudentCreateMutation, StudentCreateMutationVariables>;
export type StudentCreateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<StudentCreateMutation, StudentCreateMutationVariables>, 'mutation'>;

    export const StudentCreateComponent = (props: StudentCreateComponentProps) => (
      <ApolloReactComponents.Mutation<StudentCreateMutation, StudentCreateMutationVariables> mutation={StudentCreateDocument} {...props} />
    );
    

/**
 * __useStudentCreateMutation__
 *
 * To run a mutation, you first call `useStudentCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentCreateMutation, { data, loading, error }] = useStudentCreateMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      birthYear: // value for 'birthYear'
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *   },
 * });
 */
export function useStudentCreateMutation(baseOptions?: Apollo.MutationHookOptions<StudentCreateMutation, StudentCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudentCreateMutation, StudentCreateMutationVariables>(StudentCreateDocument, options);
      }
export type StudentCreateMutationHookResult = ReturnType<typeof useStudentCreateMutation>;
export type StudentCreateMutationResult = Apollo.MutationResult<StudentCreateMutation>;
export type StudentCreateMutationOptions = Apollo.BaseMutationOptions<StudentCreateMutation, StudentCreateMutationVariables>;
export const StudentLoginDocument = gql`
    mutation StudentLogin($username: String!, $password: String!) {
  loginStudent(loginInput: {username: $username, password: $password}) {
    ...RegularStudent
  }
}
    ${RegularStudentFragmentDoc}`;
export type StudentLoginMutationFn = Apollo.MutationFunction<StudentLoginMutation, StudentLoginMutationVariables>;
export type StudentLoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<StudentLoginMutation, StudentLoginMutationVariables>, 'mutation'>;

    export const StudentLoginComponent = (props: StudentLoginComponentProps) => (
      <ApolloReactComponents.Mutation<StudentLoginMutation, StudentLoginMutationVariables> mutation={StudentLoginDocument} {...props} />
    );
    

/**
 * __useStudentLoginMutation__
 *
 * To run a mutation, you first call `useStudentLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentLoginMutation, { data, loading, error }] = useStudentLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useStudentLoginMutation(baseOptions?: Apollo.MutationHookOptions<StudentLoginMutation, StudentLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudentLoginMutation, StudentLoginMutationVariables>(StudentLoginDocument, options);
      }
export type StudentLoginMutationHookResult = ReturnType<typeof useStudentLoginMutation>;
export type StudentLoginMutationResult = Apollo.MutationResult<StudentLoginMutation>;
export type StudentLoginMutationOptions = Apollo.BaseMutationOptions<StudentLoginMutation, StudentLoginMutationVariables>;
export const GetManyTutorsDocument = gql`
    query GetManyTutors($take: Float, $saved: Boolean, $skip: Float) {
  getManyTutors(getManyTutorsInput: {take: $take, saved: $saved, skip: $skip}) {
    ...RegularTutor
  }
}
    ${RegularTutorFragmentDoc}`;
export type GetManyTutorsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetManyTutorsQuery, GetManyTutorsQueryVariables>, 'query'>;

    export const GetManyTutorsComponent = (props: GetManyTutorsComponentProps) => (
      <ApolloReactComponents.Query<GetManyTutorsQuery, GetManyTutorsQueryVariables> query={GetManyTutorsDocument} {...props} />
    );
    

/**
 * __useGetManyTutorsQuery__
 *
 * To run a query within a React component, call `useGetManyTutorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManyTutorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManyTutorsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      saved: // value for 'saved'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetManyTutorsQuery(baseOptions?: Apollo.QueryHookOptions<GetManyTutorsQuery, GetManyTutorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManyTutorsQuery, GetManyTutorsQueryVariables>(GetManyTutorsDocument, options);
      }
export function useGetManyTutorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManyTutorsQuery, GetManyTutorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManyTutorsQuery, GetManyTutorsQueryVariables>(GetManyTutorsDocument, options);
        }
export type GetManyTutorsQueryHookResult = ReturnType<typeof useGetManyTutorsQuery>;
export type GetManyTutorsLazyQueryHookResult = ReturnType<typeof useGetManyTutorsLazyQuery>;
export type GetManyTutorsQueryResult = Apollo.QueryResult<GetManyTutorsQuery, GetManyTutorsQueryVariables>;
export const TutorLoginDocument = gql`
    mutation TutorLogin($username: String!, $password: String!) {
  loginTutor(loginInput: {username: $username, password: $password}) {
    ...RegularTutor
  }
}
    ${RegularTutorFragmentDoc}`;
export type TutorLoginMutationFn = Apollo.MutationFunction<TutorLoginMutation, TutorLoginMutationVariables>;
export type TutorLoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TutorLoginMutation, TutorLoginMutationVariables>, 'mutation'>;

    export const TutorLoginComponent = (props: TutorLoginComponentProps) => (
      <ApolloReactComponents.Mutation<TutorLoginMutation, TutorLoginMutationVariables> mutation={TutorLoginDocument} {...props} />
    );
    

/**
 * __useTutorLoginMutation__
 *
 * To run a mutation, you first call `useTutorLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTutorLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tutorLoginMutation, { data, loading, error }] = useTutorLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useTutorLoginMutation(baseOptions?: Apollo.MutationHookOptions<TutorLoginMutation, TutorLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TutorLoginMutation, TutorLoginMutationVariables>(TutorLoginDocument, options);
      }
export type TutorLoginMutationHookResult = ReturnType<typeof useTutorLoginMutation>;
export type TutorLoginMutationResult = Apollo.MutationResult<TutorLoginMutation>;
export type TutorLoginMutationOptions = Apollo.BaseMutationOptions<TutorLoginMutation, TutorLoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    firstname
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;