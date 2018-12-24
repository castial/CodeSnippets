#import <Foundation/Foundation.h>

@protocol AIPIFlyPersResDelegate <NSObject>
- (void) onLoginResult:(NSString *) result andCode:(int) code ;
- (void) onUploadResult:(NSString *) result andCode:(int) code ;
- (void) onDownloadResult:(NSData *) result andCode:(int) code ;
@end
