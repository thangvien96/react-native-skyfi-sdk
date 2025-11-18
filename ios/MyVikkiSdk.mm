#import "MyVikkiSdk.h"
#import <React/RCTBridgeModule.h>

@implementation MyVikkiSdk

RCT_EXPORT_MODULE()

// Implement multiply
- (NSNumber *)multiply:(double)a b:(double)b {
    return @(a * b);
}

// Implement initialize
- (void)initialize:(NSDictionary *)config
           resolve:(RCTPromiseResolveBlock)resolve
            reject:(RCTPromiseRejectBlock)reject {
    
    NSString *apiKey = config[@"apiKey"];
    
    if (!apiKey || [apiKey length] == 0) {
        reject(@"INIT_ERROR", @"API Key is required", nil);
        return;
    }
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.0 * NSEC_PER_SEC)),
                   dispatch_get_main_queue(), ^{
        resolve(@YES);
    });
}

// Implement fetchData
- (void)fetchData:(NSString *)url
          resolve:(RCTPromiseResolveBlock)resolve
           reject:(RCTPromiseRejectBlock)reject {
    
    NSDictionary *result = @{
        @"url": url ?: @"",
        @"data": [NSString stringWithFormat:@"Sample data from %@", url ?: @""]
    };
    
    resolve(result);
}

// Implement startMonitoring
- (void)startMonitoring:(RCTResponseSenderBlock)callback {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        for (int i = 0; i < 5; i++) {
            [NSThread sleepForTimeInterval:2.0];
            
            // Check if callback is still valid
            if (callback) {
                callback(@[[NSString stringWithFormat:@"Data chunk %d", i]]);
            }
        }
    });
}

// Implement getTypedExportedConstants
- (NSDictionary *)getTypedExportedConstants {
    return @{
        @"VERSION": @"1.0.0",
        @"PLATFORM": @"IOS"
    };
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

@end