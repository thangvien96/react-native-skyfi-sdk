package com.myvikkisdk

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.bridge.Callback
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = MyVikkiSdkModule.NAME)
class MyVikkiSdkModule(reactContext: ReactApplicationContext) : 
    NativeMyVikkiSdkSpec(reactContext) {

    companion object {
        const val NAME = "MyVikkiSdk"
    }

    override fun getName(): String = NAME

    // Implement method multiply
    override fun multiply(a: Double, b: Double): Double {
        return a * b
    }

    // Implement method initialize
    override fun initialize(config: ReadableMap?, promise: Promise?) {
        try {
            val apiKey = config?.getString("apiKey")
            val environment = config?.getString("environment")
            
            if (apiKey.isNullOrEmpty()) {
                promise?.reject("INIT_ERROR", "API Key is required")
                return
            }
            
            // Simulate async initialization
            Thread {
                try {
                    Thread.sleep(1000)
                    promise?.resolve(true)
                } catch (e: Exception) {
                    promise?.reject("INIT_ERROR", e.message, e)
                }
            }.start()
            
        } catch (e: Exception) {
            promise?.reject("INIT_ERROR", "Invalid config", e)
        }
    }

    // Implement method fetchData
    override fun fetchData(url: String?, promise: Promise?) {
        Thread {
            try {
                val result = WritableNativeMap().apply {
                    putString("url", url)
                    putString("data", "Sample data from $url")
                }
                promise?.resolve(result)
            } catch (e: Exception) {
                promise?.reject("FETCH_ERROR", e.message, e)
            }
        }.start()
    }

    // Implement method startMonitoring
    override fun startMonitoring(callback: Callback?) {
        Thread {
            var shouldContinue = true
            for (i in 0 until 5) {
                if (!shouldContinue) {
                    return@Thread  // ✅ Sử dụng return@Thread thay vì break
                }
                try {
                    Thread.sleep(2000)
                    callback?.invoke("Data chunk $i")
                } catch (e: InterruptedException) {
                    shouldContinue = false
                    return@Thread  // ✅ Return từ thread
                }
            }
        }.start()
    }

    // ✅ Return type phải là WritableMap
    override fun getTypedExportedConstants(): WritableMap {
        return WritableNativeMap().apply {
            putString("VERSION", "1.0.0")
            putString("PLATFORM", "ANDROID")
        }
    }
}