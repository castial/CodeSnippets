//
//  AIPIFlyOcrDelegate.h
//  AIPIFlyMSC
//
//  Created by wiser on 2017/6/27.
//  Copyright © 2017年 madianbo. All rights reserved.
//

#import <Foundation/Foundation.h>


@protocol AIPIFlyOcrDelegate <NSObject>
- (void) onOcrResult:(NSString*) result code:(int) code ;
@end
