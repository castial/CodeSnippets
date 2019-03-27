//
//  IFlySpeechRecognizer.h
//  MSC
//
//  Created by iflytek on 13-3-19.
//  Copyright (c) 2013年 iflytek. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "AIPIFlySpeechRecognizerDelegate.h"

#define IFLY_AUDIO_SOURCE_MIC    @"1"

/*!
 *  语音识别类
 *   此类现在设计为单例，你在使用中只需要创建此对象，不能调用release/dealloc函数去释放此对象。所有关于语音识别的操作都在此类中。
 */
@interface AIPIFlySpeechRecognizer : NSObject<AIPIFlySpeechRecognizerDelegate>

/** 设置委托对象 */
@property(nonatomic,assign) id<AIPIFlySpeechRecognizerDelegate> delegate ;

/*!
 *  返回识别对象的单例
 *
 *  @return 识别对象的单例
 */
+ (id) sharedInstance;

/*!
 *  销毁识别对象。
 *
 *  @return 成功返回YES,失败返回NO
 */
- (BOOL) destroy;


/*!
 *  设置识别引擎的参数
 *  @param value 参数对应的取值
 *  @param key   识别引擎参数
 *
 *  @return 成功返回YES；失败返回NO
 */
-(BOOL) setParameter:(NSString *) value forKey:(NSString*)key;

/*!
 *  获取识别引擎参数
 *
 *  @param key 参数key
 *
 *  @return 参数值
 */
-(NSString*) parameterForKey:(NSString *)key;

/*!
 *  开始识别
 *     同时只能进行一路会话，这次会话没有结束不能进行下一路会话，否则会报错。若有需要多次回话，
 *  请在onError回调返回后请求下一路回话。
 *
 *  @return 成功返回YES；失败返回NO
 */
- (BOOL) startListening;

/*!
 *  停止录音
 *    调用此函数会停止录音，并开始进行语音识别
 */
- (void) stopListening;

/*!
 *  取消本次会话
 */
- (void) cancel;

/*!
 *  写入音频流
 */
- (BOOL) writeAudio:(NSData *)audioData;


/** 是否正在识别
 */
@property (nonatomic, readonly) BOOL isListening;

@end

/*!
 *  音频流识别
 *   音频流识别可以将文件分段写入
 */
@interface AIPIFlySpeechRecognizer(IFlyStreamRecognizer)


@end

