#import <Foundation/Foundation.h>
#import "AIPIFlyNlpDelegate.h"
@interface AIPIFlyNlp : NSObject
{
    @private
    NSString *_params;
    id<AIPIFlyNlpDelegate> _delegate;
}
@property(nonatomic,copy) NSString *params;
@property(nonatomic,assign)id<AIPIFlyNlpDelegate> delegate;
-(id)initWithParams:(NSString *)params andDelegate:(id<AIPIFlyNlpDelegate>) delegate;
- (void) nlp:(NSString *) text;
@end
