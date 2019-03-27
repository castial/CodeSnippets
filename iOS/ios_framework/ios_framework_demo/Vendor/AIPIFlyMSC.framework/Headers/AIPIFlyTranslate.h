#import <Foundation/Foundation.h>
#import "AIPIFlyTranslateDelegate.h"
@interface AIPIFlyTranslate : NSObject
{
    @private
    NSString *_params;
    id<AIPIFlyTranslateDelegate> _delegate;
}
@property(nonatomic,copy) NSString *params;
@property(nonatomic,assign)id<AIPIFlyTranslateDelegate> delegate;
-(id)initWithParams:(NSString *)params andDelegate:(id<AIPIFlyTranslateDelegate>) delegate;
- (void) translate:(NSString *) text;
@end
