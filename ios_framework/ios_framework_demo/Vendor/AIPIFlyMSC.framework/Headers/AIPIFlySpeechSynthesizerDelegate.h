//
//  IFlySpeechSynthesizerDelegate.h
//  iflyMSC
//
//  Created by 伟峰李 on 16/12/20.
//  Copyright © 2016年 伟峰李. All rights reserved.
//

#ifndef IFlySpeechSynthesizerDelegate_h
#define IFlySpeechSynthesizerDelegate_h

#import <Foundation/Foundation.h>
@class AIPIFlySpeechError;
/** 语音合成回调 */

@protocol AIPIFlySpeechSynthesizerDelegate <NSObject>

@required
/** 结束回调
 
 当整个合成结束之后会回调此函数
 
 @param error 错误码
 */

- (void) onCompletedEx:(AIPIFlySpeechError *) errorCode;

@optional
/** 开始合成回调 */
- (void) onSpeakBeginEx;

/** 缓冲进度回调
 
 @param progress 缓冲进度，0-100
 @param msg 附件信息，此版本为nil
 */
- (void) onBufferProgressEx:(float) progress messageEx:(NSString *)msg;

/** 播放进度回调
 
 @param progress 播放进度，0-100
 */
- (void) onSpeakProgressEx:(float) progress;

/** 暂停播放回调 */
- (void) onSpeakPausedEx;

/** 恢复播放回调 */
- (void) onSpeakResumedEx;

/** 正在取消回调
 
 当调用`cancel`之后会回调此函数
 */
- (void) onSpeakCancelEx;

/** 扩展事件回调

 根据事件类型返回额外的数据

 @param eventType 事件类型，具体参见IFlySpeechEventType枚举。目前只支持EVENT_TTS_BUFFER也就是实时返回合成音频。

 */
- (void) onEventEx:(int)eventType arg0Ex:(int)arg0 arg1Ex:(int)arg1 dataEx:(NSData *)eventData;

@end


#endif /* IFlySpeechSynthesizerDelegate_h */
