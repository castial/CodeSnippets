//
//  IFlySpeechSynthesizer.h
//  iflyMSC
//
//  Created by 伟峰李 on 16/12/20.
//  Copyright © 2016年 伟峰李. All rights reserved.
//
//
//#ifndef IFlySpeechSynthesizer_h
//#define IFlySpeechSynthesizer_h

#import <Foundation/Foundation.h>
#import "AIPIFlySpeechSynthesizerDelegate.h"

/*!
 *  语音合成
 */
@interface AIPIFlySpeechSynthesizer : NSObject

/*!
 *  设置识别的委托对象
 */
@property(nonatomic,assign) id<AIPIFlySpeechSynthesizerDelegate> delegate;

/*!
 *  返回合成对象的单例
 *
 *  @return 合成对象
 */
+ (id) sharedInstance;

/*!
 *  销毁合成对象。
 *
 *  @return 成功返回YES,失败返回NO.
 */
+ (BOOL) destroy;


/*!
 *  设置合成参数
 *
 *  @param value 参数取值
 *  @param key   合成参数
 *
 *  @return 设置成功返回YES，失败返回NO
 */
-(BOOL) setParameter:(NSString *) value forKey:(NSString*)key;

/*!
 *  设置额外参数
 *
 *
 */

-(void) setParameterEx:(NSString *) value;

/*!
 *  获取合成参数
 *
 *  @param key 参数key
 *
 *  @return 参数值
 */
-(NSString*) parameterForKey:(NSString *)key;

/*!
 *  开始合成(播放)
 *   调用此函数进行合成，如果发生错误会回调错误`onCompleted`
 *
 *  @param text 合成的文本,最大的字节数为1k
 */
- (void) startSpeaking:(NSString *)text;

/*!
 *  开始合成(不播放)
 *    调用此函数进行合成，如果发生错误会回调错误`onCompleted`
 *
 *  @param text 合成的文本,最大的字节数为1k
 *  @param uri  合成后，保存再本地的音频路径
 */
-(void)synthesize:(NSString *)text toUri:(NSString*)uri;

/*!
 *  暂停播放
 *   暂停播放之后，合成不会暂停，仍会继续，如果发生错误则会回调错误`onCompleted`
 */
- (void) pauseSpeaking;

/*!
 *  恢复播放
 */
- (void) resumeSpeaking;

/*!
 *  停止播放并停止合成
 */
- (void) stopSpeaking;

/*!
 *  是否正在播放
 */
@property (nonatomic, readonly) BOOL isSpeaking;


/*
 *获取会话ID
 */

- (NSString *) getSessionId;

@end


//#endif /* IFlySpeechSynthesizer_h */
