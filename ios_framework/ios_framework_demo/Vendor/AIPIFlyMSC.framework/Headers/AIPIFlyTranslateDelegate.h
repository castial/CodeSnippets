#import <Foundation/Foundation.h>

@protocol AIPIFlyTranslateDelegate <NSObject>
- (void) onTranslateResult:(NSString *) result andCode:(int) code ;
@end
