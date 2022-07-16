import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  HeroSectionSlicesDynamicZoneInput: any;
  HomePageTestDynamicZoneInput: any;
  JSON: any;
  SliceSlicesDynamicZoneInput: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentSharedButton = {
  __typename?: 'ComponentSharedButton';
  color: Enum_Componentsharedbutton_Color;
  icon?: Maybe<Enum_Componentsharedbutton_Icon>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentSharedLink>;
  position?: Maybe<Enum_Componentsharedbutton_Position>;
  size: Enum_Componentsharedbutton_Size;
};

export type ComponentSharedButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentSharedLinkFiltersInput>;
  not?: InputMaybe<ComponentSharedButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedImage = {
  __typename?: 'ComponentSharedImage';
  allowExpand?: Maybe<Scalars['Boolean']>;
  alt?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  priority?: Maybe<Scalars['Boolean']>;
  width: Scalars['Int'];
};

export type ComponentSharedImageFiltersInput = {
  allowExpand?: InputMaybe<BooleanFilterInput>;
  alt?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
  height?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ComponentSharedImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
  priority?: InputMaybe<BooleanFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type ComponentSharedImageInput = {
  allowExpand?: InputMaybe<Scalars['Boolean']>;
  alt?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  priority?: InputMaybe<Scalars['Boolean']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink';
  color: Enum_Componentsharedlink_Color;
  href: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  target?: Maybe<Enum_Componentsharedlink_Target>;
};

export type ComponentSharedLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>;
  target?: InputMaybe<StringFilterInput>;
};

export type ComponentSlicesHero = {
  __typename?: 'ComponentSlicesHero';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentSlicesHeroFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSlicesHeroFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSlicesHeroFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSlicesHeroFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSlicesHeroInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSlicesLookingGlass = {
  __typename?: 'ComponentSlicesLookingGlass';
  buttons?: Maybe<Array<Maybe<ComponentSharedButton>>>;
  collapsible?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  dropdownSlices?: Maybe<SliceEntityResponse>;
  floatingLinks?: Maybe<Array<Maybe<ComponentSharedLink>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentSlicesLookingGlassButtonsArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSlicesLookingGlassFloatingLinksArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSlicesLookingGlassWithPicture = {
  __typename?: 'ComponentSlicesLookingGlassWithPicture';
  id: Scalars['ID'];
  image: ComponentSharedImage;
  imagePosition: Enum_Componentsliceslookingglasswithpicture_Imageposition;
  lookingGlass?: Maybe<ComponentSlicesLookingGlass>;
};

export type ComponentSlicesMultiImageDisplay = {
  __typename?: 'ComponentSlicesMultiImageDisplay';
  allowExpand?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  images: Array<Maybe<ComponentSharedImage>>;
};


export type ComponentSlicesMultiImageDisplayImagesArgs = {
  filters?: InputMaybe<ComponentSharedImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsharedbutton_Color {
  AutoS400O10 = 'autoS400O10',
  BlackS400O10 = 'blackS400O10',
  GreenS400O10 = 'greenS400O10',
  PurpleS400O10 = 'purpleS400O10',
  RedS400O10 = 'redS400O10',
  SkyS400O10 = 'skyS400O10',
  WhiteS400O10 = 'whiteS400O10'
}

export enum Enum_Componentsharedbutton_Icon {
  Next = 'next',
  Previous = 'previous'
}

export enum Enum_Componentsharedbutton_Position {
  Center = 'center'
}

export enum Enum_Componentsharedbutton_Size {
  Md = 'md',
  Sm = 'sm'
}

export enum Enum_Componentsharedlink_Color {
  AutoS400O10 = 'autoS400O10',
  BlackS400O10 = 'blackS400O10',
  GreenS400O10 = 'greenS400O10',
  PurpleS400O10 = 'purpleS400O10',
  RedS400O10 = 'redS400O10',
  SkyS400O10 = 'skyS400O10',
  WhiteS400O10 = 'whiteS400O10'
}

export enum Enum_Componentsharedlink_Target {
  Blank = 'blank'
}

export enum Enum_Componentsliceslookingglasswithpicture_Imageposition {
  Left = 'left',
  Right = 'right'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GalleryPage = {
  __typename?: 'GalleryPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  hero_sections?: Maybe<HeroSectionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GalleryPageHero_SectionsArgs = {
  filters?: InputMaybe<HeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GalleryPageEntity = {
  __typename?: 'GalleryPageEntity';
  attributes?: Maybe<GalleryPage>;
  id?: Maybe<Scalars['ID']>;
};

export type GalleryPageEntityResponse = {
  __typename?: 'GalleryPageEntityResponse';
  data?: Maybe<GalleryPageEntity>;
};

export type GalleryPageInput = {
  hero_sections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GenericMorph = ComponentSharedButton | ComponentSharedImage | ComponentSharedLink | ComponentSlicesHero | ComponentSlicesLookingGlass | ComponentSlicesLookingGlassWithPicture | ComponentSlicesMultiImageDisplay | GalleryPage | HeroSection | HomePage | I18NLocale | Slice | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HeroSection = {
  __typename?: 'HeroSection';
  collectionName: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  hero: ComponentSlicesHero;
  holoImage?: Maybe<ComponentSharedImage>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slices?: Maybe<Array<Maybe<HeroSectionSlicesDynamicZone>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeroSectionEntity = {
  __typename?: 'HeroSectionEntity';
  attributes?: Maybe<HeroSection>;
  id?: Maybe<Scalars['ID']>;
};

export type HeroSectionEntityResponse = {
  __typename?: 'HeroSectionEntityResponse';
  data?: Maybe<HeroSectionEntity>;
};

export type HeroSectionEntityResponseCollection = {
  __typename?: 'HeroSectionEntityResponseCollection';
  data: Array<HeroSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type HeroSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HeroSectionFiltersInput>>>;
  collectionName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hero?: InputMaybe<ComponentSlicesHeroFiltersInput>;
  holoImage?: InputMaybe<ComponentSharedImageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HeroSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HeroSectionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HeroSectionInput = {
  collectionName?: InputMaybe<Scalars['String']>;
  hero?: InputMaybe<ComponentSlicesHeroInput>;
  holoImage?: InputMaybe<ComponentSharedImageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slices?: InputMaybe<Array<Scalars['HeroSectionSlicesDynamicZoneInput']>>;
};

export type HeroSectionRelationResponseCollection = {
  __typename?: 'HeroSectionRelationResponseCollection';
  data: Array<HeroSectionEntity>;
};

export type HeroSectionSlicesDynamicZone = ComponentSharedButton | ComponentSlicesLookingGlass | ComponentSlicesLookingGlassWithPicture | ComponentSlicesMultiImageDisplay | Error;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  hero_sections?: Maybe<HeroSectionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  test?: Maybe<Array<Maybe<HomePageTestDynamicZone>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageHero_SectionsArgs = {
  filters?: InputMaybe<HeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  hero_sections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  test?: InputMaybe<Array<Scalars['HomePageTestDynamicZoneInput']>>;
};

export type HomePageTestDynamicZone = ComponentSlicesHero | ComponentSlicesLookingGlass | ComponentSlicesLookingGlassWithPicture | ComponentSlicesMultiImageDisplay | Error;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHeroSection?: Maybe<HeroSectionEntityResponse>;
  createSlice?: Maybe<SliceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteGalleryPage?: Maybe<GalleryPageEntityResponse>;
  deleteHeroSection?: Maybe<HeroSectionEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteSlice?: Maybe<SliceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateGalleryPage?: Maybe<GalleryPageEntityResponse>;
  updateHeroSection?: Maybe<HeroSectionEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateSlice?: Maybe<SliceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateHeroSectionArgs = {
  data: HeroSectionInput;
};


export type MutationCreateSliceArgs = {
  data: SliceInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteHeroSectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSliceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGalleryPageArgs = {
  data: GalleryPageInput;
};


export type MutationUpdateHeroSectionArgs = {
  data: HeroSectionInput;
  id: Scalars['ID'];
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateSliceArgs = {
  data: SliceInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  galleryPage?: Maybe<GalleryPageEntityResponse>;
  heroSection?: Maybe<HeroSectionEntityResponse>;
  heroSections?: Maybe<HeroSectionEntityResponseCollection>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  slice?: Maybe<SliceEntityResponse>;
  slices?: Maybe<SliceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryGalleryPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeroSectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryHeroSectionsArgs = {
  filters?: InputMaybe<HeroSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySliceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySlicesArgs = {
  filters?: InputMaybe<SliceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Slice = {
  __typename?: 'Slice';
  collectionName: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slices?: Maybe<Array<Maybe<SliceSlicesDynamicZone>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SliceEntity = {
  __typename?: 'SliceEntity';
  attributes?: Maybe<Slice>;
  id?: Maybe<Scalars['ID']>;
};

export type SliceEntityResponse = {
  __typename?: 'SliceEntityResponse';
  data?: Maybe<SliceEntity>;
};

export type SliceEntityResponseCollection = {
  __typename?: 'SliceEntityResponseCollection';
  data: Array<SliceEntity>;
  meta: ResponseCollectionMeta;
};

export type SliceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SliceFiltersInput>>>;
  collectionName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SliceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SliceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SliceInput = {
  collectionName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slices?: InputMaybe<Array<Scalars['SliceSlicesDynamicZoneInput']>>;
};

export type SliceSlicesDynamicZone = ComponentSharedButton | ComponentSlicesHero | ComponentSlicesLookingGlass | ComponentSlicesLookingGlassWithPicture | ComponentSlicesMultiImageDisplay | Error;

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetGalleryPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGalleryPageQuery = { __typename?: 'Query', galleryPage?: { __typename?: 'GalleryPageEntityResponse', data?: { __typename?: 'GalleryPageEntity', attributes?: { __typename: 'GalleryPage', hero_sections?: { __typename: 'HeroSectionRelationResponseCollection', data: Array<{ __typename?: 'HeroSectionEntity', attributes?: { __typename: 'HeroSection', hero: { __typename: 'ComponentSlicesHero', title: string, description?: string | null }, slices?: Array<{ __typename: 'ComponentSharedButton', label?: string | null, position?: Enum_Componentsharedbutton_Position | null, color: Enum_Componentsharedbutton_Color, icon?: Enum_Componentsharedbutton_Icon | null, size: Enum_Componentsharedbutton_Size, link?: { __typename: 'ComponentSharedLink', label: string, color: Enum_Componentsharedlink_Color, href: string, target?: Enum_Componentsharedlink_Target | null } | null } | { __typename: 'ComponentSlicesLookingGlass', title?: string | null, description?: string | null, collapsible?: boolean | null, buttons?: Array<{ __typename: 'ComponentSharedButton', size: Enum_Componentsharedbutton_Size, label?: string | null, color: Enum_Componentsharedbutton_Color, link?: { __typename?: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null } | null } | null> | null, floatingLinks?: Array<{ __typename: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null, color: Enum_Componentsharedlink_Color } | null> | null, dropdownSlices?: { __typename: 'SliceEntityResponse', data?: { __typename?: 'SliceEntity', attributes?: { __typename?: 'Slice', slices?: Array<{ __typename: 'ComponentSharedButton', label?: string | null, position?: Enum_Componentsharedbutton_Position | null, color: Enum_Componentsharedbutton_Color, icon?: Enum_Componentsharedbutton_Icon | null, size: Enum_Componentsharedbutton_Size, link?: { __typename: 'ComponentSharedLink', label: string, color: Enum_Componentsharedlink_Color, href: string, target?: Enum_Componentsharedlink_Target | null } | null } | { __typename: 'ComponentSlicesHero' } | { __typename: 'ComponentSlicesLookingGlass' } | { __typename: 'ComponentSlicesLookingGlassWithPicture', imagePosition: Enum_Componentsliceslookingglasswithpicture_Imageposition, image: { __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } }, lookingGlass?: { __typename: 'ComponentSlicesLookingGlass', title?: string | null, description?: string | null, buttons?: Array<{ __typename: 'ComponentSharedButton', size: Enum_Componentsharedbutton_Size, label?: string | null, color: Enum_Componentsharedbutton_Color, link?: { __typename?: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null } | null } | null> | null, floatingLinks?: Array<{ __typename: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null, color: Enum_Componentsharedlink_Color } | null> | null } | null } | { __typename: 'ComponentSlicesMultiImageDisplay', allowExpand?: boolean | null, images: Array<{ __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, allowExpand?: boolean | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> } | { __typename: 'Error' } | null> | null } | null } | null } | null } | { __typename: 'ComponentSlicesLookingGlassWithPicture', imagePosition: Enum_Componentsliceslookingglasswithpicture_Imageposition, image: { __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } }, lookingGlass?: { __typename: 'ComponentSlicesLookingGlass', title?: string | null, description?: string | null, buttons?: Array<{ __typename: 'ComponentSharedButton', size: Enum_Componentsharedbutton_Size, label?: string | null, color: Enum_Componentsharedbutton_Color, link?: { __typename?: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null } | null } | null> | null, floatingLinks?: Array<{ __typename: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null, color: Enum_Componentsharedlink_Color } | null> | null } | null } | { __typename: 'ComponentSlicesMultiImageDisplay', images: Array<{ __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> } | { __typename?: 'Error' } | null> | null, holoImage?: { __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null }> } | null } | null } | null } | null };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename: 'HomePage', hero_sections?: { __typename: 'HeroSectionRelationResponseCollection', data: Array<{ __typename?: 'HeroSectionEntity', attributes?: { __typename: 'HeroSection', hero: { __typename: 'ComponentSlicesHero', title: string, description?: string | null }, slices?: Array<{ __typename: 'ComponentSharedButton', label?: string | null, position?: Enum_Componentsharedbutton_Position | null, color: Enum_Componentsharedbutton_Color, icon?: Enum_Componentsharedbutton_Icon | null, size: Enum_Componentsharedbutton_Size, link?: { __typename: 'ComponentSharedLink', label: string, color: Enum_Componentsharedlink_Color, href: string, target?: Enum_Componentsharedlink_Target | null } | null } | { __typename: 'ComponentSlicesLookingGlass', title?: string | null, description?: string | null, buttons?: Array<{ __typename: 'ComponentSharedButton', size: Enum_Componentsharedbutton_Size, label?: string | null, color: Enum_Componentsharedbutton_Color, link?: { __typename?: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null } | null } | null> | null, floatingLinks?: Array<{ __typename: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null, color: Enum_Componentsharedlink_Color } | null> | null } | { __typename: 'ComponentSlicesLookingGlassWithPicture', imagePosition: Enum_Componentsliceslookingglasswithpicture_Imageposition, image: { __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, priority?: boolean | null, allowExpand?: boolean | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } }, lookingGlass?: { __typename: 'ComponentSlicesLookingGlass', title?: string | null, description?: string | null, buttons?: Array<{ __typename: 'ComponentSharedButton', size: Enum_Componentsharedbutton_Size, label?: string | null, color: Enum_Componentsharedbutton_Color, link?: { __typename?: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null } | null } | null> | null, floatingLinks?: Array<{ __typename: 'ComponentSharedLink', href: string, label: string, target?: Enum_Componentsharedlink_Target | null, color: Enum_Componentsharedlink_Color } | null> | null } | null } | { __typename: 'ComponentSlicesMultiImageDisplay', allowExpand?: boolean | null, images: Array<{ __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, priority?: boolean | null, allowExpand?: boolean | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> } | { __typename?: 'Error' } | null> | null, holoImage?: { __typename: 'ComponentSharedImage', width: number, height: number, alt?: string | null, priority?: boolean | null, image: { __typename: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null }> } | null, test?: Array<{ __typename: 'ComponentSlicesHero', title: string } | { __typename: 'ComponentSlicesLookingGlass' } | { __typename: 'ComponentSlicesLookingGlassWithPicture' } | { __typename: 'ComponentSlicesMultiImageDisplay' } | { __typename: 'Error' } | null> | null } | null } | null } | null };


export const GetGalleryPageDocument = gql`
    query GetGalleryPage {
  galleryPage {
    data {
      attributes {
        __typename
        hero_sections {
          __typename
          data {
            attributes {
              __typename
              hero {
                __typename
                title
                description
              }
              slices {
                ... on ComponentSlicesLookingGlass {
                  __typename
                  title
                  description
                  buttons {
                    __typename
                    size
                    label
                    color
                    link {
                      href
                      label
                      target
                    }
                  }
                  floatingLinks {
                    __typename
                    href
                    label
                    target
                    color
                  }
                  collapsible
                  dropdownSlices {
                    __typename
                    data {
                      attributes {
                        slices {
                          __typename
                          ... on ComponentSlicesMultiImageDisplay {
                            __typename
                            allowExpand
                            images {
                              __typename
                              width
                              height
                              alt
                              allowExpand
                              image {
                                __typename
                                data {
                                  attributes {
                                    url
                                  }
                                }
                              }
                            }
                          }
                          ... on ComponentSlicesLookingGlassWithPicture {
                            __typename
                            image {
                              __typename
                              width
                              height
                              alt
                              image {
                                __typename
                                data {
                                  attributes {
                                    url
                                  }
                                }
                              }
                            }
                            imagePosition
                            lookingGlass {
                              __typename
                              title
                              description
                              buttons {
                                __typename
                                size
                                label
                                color
                                link {
                                  href
                                  label
                                  target
                                }
                              }
                              floatingLinks {
                                __typename
                                href
                                label
                                target
                                color
                              }
                            }
                          }
                          ... on ComponentSharedButton {
                            __typename
                            label
                            position
                            color
                            icon
                            size
                            link {
                              __typename
                              label
                              color
                              href
                              target
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on ComponentSlicesMultiImageDisplay {
                  __typename
                  images {
                    __typename
                    width
                    height
                    alt
                    image {
                      __typename
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
                ... on ComponentSlicesLookingGlassWithPicture {
                  __typename
                  image {
                    __typename
                    width
                    height
                    alt
                    image {
                      __typename
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  imagePosition
                  lookingGlass {
                    __typename
                    title
                    description
                    buttons {
                      __typename
                      size
                      label
                      color
                      link {
                        href
                        label
                        target
                      }
                    }
                    floatingLinks {
                      __typename
                      href
                      label
                      target
                      color
                    }
                  }
                }
                ... on ComponentSharedButton {
                  __typename
                  label
                  position
                  color
                  icon
                  size
                  link {
                    __typename
                    label
                    color
                    href
                    target
                  }
                }
              }
              holoImage {
                __typename
                width
                height
                alt
                image {
                  __typename
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetGalleryPageQuery__
 *
 * To run a query within a React component, call `useGetGalleryPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGalleryPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGalleryPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGalleryPageQuery(baseOptions?: Apollo.QueryHookOptions<GetGalleryPageQuery, GetGalleryPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGalleryPageQuery, GetGalleryPageQueryVariables>(GetGalleryPageDocument, options);
      }
export function useGetGalleryPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGalleryPageQuery, GetGalleryPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGalleryPageQuery, GetGalleryPageQueryVariables>(GetGalleryPageDocument, options);
        }
export type GetGalleryPageQueryHookResult = ReturnType<typeof useGetGalleryPageQuery>;
export type GetGalleryPageLazyQueryHookResult = ReturnType<typeof useGetGalleryPageLazyQuery>;
export type GetGalleryPageQueryResult = Apollo.QueryResult<GetGalleryPageQuery, GetGalleryPageQueryVariables>;
export const GetHomePageDocument = gql`
    query GetHomePage {
  homePage {
    data {
      attributes {
        __typename
        hero_sections {
          __typename
          data {
            attributes {
              __typename
              hero {
                __typename
                title
                description
              }
              slices {
                ... on ComponentSlicesLookingGlass {
                  __typename
                  title
                  description
                  buttons {
                    __typename
                    size
                    label
                    color
                    link {
                      href
                      label
                      target
                    }
                  }
                  floatingLinks {
                    __typename
                    href
                    label
                    target
                    color
                  }
                }
                ... on ComponentSlicesMultiImageDisplay {
                  __typename
                  allowExpand
                  images {
                    __typename
                    width
                    height
                    alt
                    priority
                    allowExpand
                    image {
                      __typename
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
                ... on ComponentSlicesLookingGlassWithPicture {
                  __typename
                  image {
                    __typename
                    width
                    height
                    alt
                    priority
                    allowExpand
                    image {
                      __typename
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  imagePosition
                  lookingGlass {
                    __typename
                    title
                    description
                    buttons {
                      __typename
                      size
                      label
                      color
                      link {
                        href
                        label
                        target
                      }
                    }
                    floatingLinks {
                      __typename
                      href
                      label
                      target
                      color
                    }
                  }
                }
                ... on ComponentSharedButton {
                  __typename
                  label
                  position
                  color
                  icon
                  size
                  link {
                    __typename
                    label
                    color
                    href
                    target
                  }
                }
              }
              holoImage {
                __typename
                width
                height
                alt
                priority
                image {
                  __typename
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        test {
          __typename
          ... on ComponentSlicesHero {
            __typename
            title
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
      }
export function useGetHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<typeof useGetHomePageLazyQuery>;
export type GetHomePageQueryResult = Apollo.QueryResult<GetHomePageQuery, GetHomePageQueryVariables>;