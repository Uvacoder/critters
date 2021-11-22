import * as Typegen from '@kenchi/nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Account: Prisma.Account
  Session: Prisma.Session
  User: Prisma.User
  Post: Prisma.Post
  Critter: Prisma.Critter
  VerificationToken: Prisma.VerificationToken
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
      ordering: 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
      ordering: 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'phone' | 'accounts' | 'sessions' | 'createdAt' | 'updatedAt' | 'posts' | 'postId'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'phone' | 'accounts' | 'sessions' | 'createdAt' | 'updatedAt' | 'posts' | 'postId'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'date_missing' | 'date_found' | 'reward' | 'reward_amount' | 'location' | 'createdAt' | 'updatedAt' | 'critter' | 'user' | 'userId' | 'critterId'
      ordering: 'id' | 'title' | 'description' | 'date_missing' | 'date_found' | 'reward' | 'reward_amount' | 'location' | 'createdAt' | 'updatedAt' | 'critter' | 'user' | 'userId' | 'critterId'
    }
    critters: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'images' | 'post' | 'postId'
      ordering: 'id' | 'name' | 'images' | 'post' | 'postId'
    }
    verificationTokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'identifier' | 'token' | 'expires'
      ordering: 'identifier' | 'token' | 'expires'
    }
  },
  Account: {

  }
  Session: {

  }
  User: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
      ordering: 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
      ordering: 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'date_missing' | 'date_found' | 'reward' | 'reward_amount' | 'location' | 'createdAt' | 'updatedAt' | 'critter' | 'user' | 'userId' | 'critterId'
      ordering: 'id' | 'title' | 'description' | 'date_missing' | 'date_found' | 'reward' | 'reward_amount' | 'location' | 'createdAt' | 'updatedAt' | 'critter' | 'user' | 'userId' | 'critterId'
    }
  }
  Post: {

  }
  Critter: {

  }
  VerificationToken: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    account: 'Account'
    accounts: 'Account'
    session: 'Session'
    sessions: 'Session'
    user: 'User'
    users: 'User'
    post: 'Post'
    posts: 'Post'
    critter: 'Critter'
    critters: 'Critter'
    verificationToken: 'VerificationToken'
    verificationTokens: 'VerificationToken'
  },
  Mutation: {
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneSession: 'Session'
    updateOneSession: 'Session'
    updateManySession: 'AffectedRowsOutput'
    deleteOneSession: 'Session'
    deleteManySession: 'AffectedRowsOutput'
    upsertOneSession: 'Session'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
    createOneCritter: 'Critter'
    updateOneCritter: 'Critter'
    updateManyCritter: 'AffectedRowsOutput'
    deleteOneCritter: 'Critter'
    deleteManyCritter: 'AffectedRowsOutput'
    upsertOneCritter: 'Critter'
    createOneVerificationToken: 'VerificationToken'
    updateOneVerificationToken: 'VerificationToken'
    updateManyVerificationToken: 'AffectedRowsOutput'
    deleteOneVerificationToken: 'VerificationToken'
    deleteManyVerificationToken: 'AffectedRowsOutput'
    upsertOneVerificationToken: 'VerificationToken'
  },
  Account: {
    id: 'String'
    userId: 'String'
    type: 'String'
    provider: 'String'
    providerAccountId: 'String'
    refresh_token: 'String'
    access_token: 'String'
    expires_at: 'Int'
    token_type: 'String'
    scope: 'String'
    id_token: 'String'
    session_state: 'String'
    oauth_token_secret: 'String'
    oauth_token: 'String'
    user: 'User'
  }
  Session: {
    id: 'String'
    sessionToken: 'String'
    userId: 'String'
    expires: 'DateTime'
    user: 'User'
  }
  User: {
    id: 'String'
    name: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    phone: 'String'
    accounts: 'Account'
    sessions: 'Session'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    posts: 'Post'
    postId: 'String'
  }
  Post: {
    id: 'String'
    title: 'String'
    description: 'String'
    date_missing: 'String'
    date_found: 'String'
    reward: 'Boolean'
    reward_amount: 'Int'
    location: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    critter: 'Critter'
    user: 'User'
    userId: 'String'
    critterId: 'String'
  }
  Critter: {
    id: 'String'
    name: 'String'
    images: 'String'
    post: 'Post'
    postId: 'String'
  }
  VerificationToken: {
    identifier: 'String'
    token: 'String'
    expires: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Account: Typegen.NexusPrismaFields<'Account'>
  Session: Typegen.NexusPrismaFields<'Session'>
  User: Typegen.NexusPrismaFields<'User'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Critter: Typegen.NexusPrismaFields<'Critter'>
  VerificationToken: Typegen.NexusPrismaFields<'VerificationToken'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  