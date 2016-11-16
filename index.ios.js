/**
 * @providesModule UserActivity
 * @flow
 */
'use strict';
import {
  NativeModules,
} from 'react-native';

var NativeUserActivity = NativeModules.UserActivity;

/**
 * High-level docs for the UserActivity iOS API can be written here.
 */

 type ActivityOptions = {
   activityType: string,
   eligibleForSearch: boolean,
   eligibleForPublicIndexing: boolean,
   eligibleForHandoff: boolean,
   title: string,
   webpageURL: string,
   userInfo: any,
   description: string,
   thumbnailURL: string,
 };

var UserActivity = {
  createActivity: function (options: ActivityOptions) {
    NativeUserActivity.createActivity(
      options.activityType,
      options.eligibleForSearch,
      options.eligibleForPublicIndexing,
      options.eligibleForHandoff,
      options.title,
      options.webpageURL,
      options.userInfo,
      options.description,
      options.thumbnailURL,
    );
  },
};

export default UserActivity;
