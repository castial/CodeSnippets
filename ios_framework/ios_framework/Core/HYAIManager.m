//
//  HYAIManager.m
//  ios_framework
//
//  Created by harlan on 2018/12/24.
//  Copyright © 2018 Iafine. All rights reserved.
//

#import "HYAIManager.h"
#import <AIPIFlyMSC/AIPIFlySpeechUtility.h>

@implementation HYAIManager

+ (void)start {
    NSLog(@"Hello World, frameowrk!");
    
    [AIPIFlySpeechUtility createUtility:@"123123"];
}

@end
