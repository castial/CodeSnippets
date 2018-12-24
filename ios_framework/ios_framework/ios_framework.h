//
//  ios_framework.h
//  ios_framework
//
//  Created by harlan on 2018/12/24.
//  Copyright © 2018 Iafine. All rights reserved.
//

#import <UIKit/UIKit.h>

#if __has_include(<YiConnectSDK/YiConnectSDK.h>)

//! Project version number for ios_framework.
FOUNDATION_EXPORT double ios_frameworkVersionNumber;

//! Project version string for ios_framework.
FOUNDATION_EXPORT const unsigned char ios_frameworkVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <ios_framework/PublicHeader.h>

#import <ios_framework/HYAIManager.h>

#else

#import "HYAIManager.h"

#endif


