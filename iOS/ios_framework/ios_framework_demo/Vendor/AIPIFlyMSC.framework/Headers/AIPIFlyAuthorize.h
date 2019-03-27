//
//  Authorize.h
//  AIPIFlyMSC
//
//  Created by wiser on 2017/5/4.
//  Copyright © 2017年 madianbo. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AIPIFlyAuthorizeDelegate.h"

@interface AIPIFlyAuthorize : NSObject
{
@private
    NSString *_params;
    id<AIPIFlyAuthorizeDelegate> _delegate;
}
@property(nonatomic,copy) NSString *params;
@property(nonatomic,assign)id<AIPIFlyAuthorizeDelegate> delegate;
-(id)initWithParams:(NSString *)params andDelegate:(id<AIPIFlyAuthorizeDelegate>) delegate;
- (void) authorizeLogin:(NSString *) text;
- (void) authorizeLogout:(NSString *) text;

@end
