//
//  AIPIFlyOcr.h
//  AIPIFlyMSC
//
//  Created by wiser on 2017/6/27.
//  Copyright © 2017年 madianbo. All rights reserved.
//

#import <Foundation/Foundation.h>
#include "AIPIFlyOcrDelegate.h"

@interface AIPIFlyOcr : NSObject{
    id<AIPIFlyOcrDelegate> _delegate;
//     const char * buffer;
//     const char *result;
}

/**
 * @fn      init
 * @brief   初始化
 *
 * @param   delegate            -[in] 委托对象
 */
- (id) init:(id<AIPIFlyOcrDelegate>) delegate;

//输入 url 图片地址  参数   超时时间
-(void)inputImage:(NSString *) url path:(NSString*)path param:(NSString*)param time:(int)time;

@end
