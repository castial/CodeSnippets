//
//  AIPIFlyISRParam.h
//  iflyMSC
//
//  Created by 伟峰李 on 16/12/23.
//  Copyright © 2016年 伟峰李. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface AIPIFlyISRParam : NSObject


/**
 *  参数存储所在字典
 */
@property(nonatomic,retain)NSMutableDictionary* params;

/**
 *  设置默认参数
 *  此方法用于设置默认参数，子类可通过重写此方法来设置默认参数
 *  此方法应在init后立即调用;
 */
-(void)setDefault;

/*!
 *  设置参数，如果key不存在则自动添加，如果key存在则覆盖
 *
 *  @param value 参数的value
 *  @param key   参数的key
 *
 *  @return 成功返回YES;失败返回NO
 */
-(BOOL)setValue:(NSString *)value forKey:(NSString *)key;

/*!
 *  获取key对应的参数
 *
 *  @param key 参数的key
 *
 *  @return 参数key对应的value值
 */
-(NSString*)valueForKey:(NSString*)key;



@end
