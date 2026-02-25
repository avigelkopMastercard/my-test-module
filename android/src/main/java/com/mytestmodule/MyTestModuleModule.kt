package com.mytestmodule

import com.facebook.react.bridge.ReactApplicationContext

class MyTestModuleModule(reactContext: ReactApplicationContext) :
  NativeMyTestModuleSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = NativeMyTestModuleSpec.NAME
  }
}
