#import <Foundation/Foundation.h>
#import "AIPIFlyPersResDelegate.h"
@interface AIPIFlyPersRes : NSObject
{
    @private
    id<AIPIFlyPersResDelegate> _delegate;
}

@property(nonatomic,assign)id<AIPIFlyPersResDelegate> delegate;
- (void) login:(NSString *) params;
- (void) upload:(NSString *) params withData:(NSData *)data;
- (void) download:(NSString *) params;

@end
