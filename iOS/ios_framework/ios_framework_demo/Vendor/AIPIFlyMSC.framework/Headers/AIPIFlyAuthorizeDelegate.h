//
//  AuthorizeDelegate.h
//  AIPIFlyMSC
//
//  Created by wiser on 2017/5/4.
//  Copyright © 2017年 madianbo. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol AIPIFlyAuthorizeDelegate <NSObject>
- (void) onAuthorizeResult:(int) code ;
- (void) onAuthorizeOutResult:(int) code ;
@end
