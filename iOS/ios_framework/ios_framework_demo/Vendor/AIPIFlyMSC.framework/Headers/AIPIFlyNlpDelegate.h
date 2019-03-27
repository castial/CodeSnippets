#import <Foundation/Foundation.h>

@protocol AIPIFlyNlpDelegate <NSObject>
- (void) onNlpResult:(NSString *) result andCode:(int) code ;
@end
