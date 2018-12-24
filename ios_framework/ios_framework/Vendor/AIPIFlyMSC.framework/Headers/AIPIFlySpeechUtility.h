//
//  AIPIFlySpeechUtility.h
//  iflyMSC
//
//  Created by 伟峰李 on 16/12/21.
//  Copyright © 2016年 伟峰李. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface AIPIFlySpeechUtility : NSObject

+ (AIPIFlySpeechUtility*) createUtility:(NSString *) params;

/*!
 *  销毁用户配置对象
 *
 *  @return 成功返回YES,失败返回NO
 */
+(BOOL) destroy;

/*!
 *  获取用户配置对象
 *
 *  @return 用户配置对象
 */
+(AIPIFlySpeechUtility *) getUtility;

/*!
 *  设置MSC引擎的状态参数
 *
 *  @param value 参数值
 *  @param key   参数名称
 *
 *  @return 成功返回YES,失败返回NO
 */
-(BOOL) setParameter:(NSString *) value forKey:(NSString*)key;

/**
 *  获取MSC引擎状态参数
 *
 *  @param key 参数名
 *
 *  @return 参数值
 */
- (NSString *)parameterForKey:(NSString *)key;

/**
 *  引擎类型
 */

@end
