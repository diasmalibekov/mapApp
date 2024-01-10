### Troubleshooting

### Melos

If you have `Can't load Kernel binary: Invalid SDK hash.` error when running `melos` command, you need to run the following command:

```bash
dart pub global deactivate melos
dart pub global activate melos
```

This will reinstall melos and fix the issue.

### Anroid NDK version

If you have `configure-android error: compiler not found, please check environment settings (TARGET ABI, etc)` error, make sure you have the minimum recommended version installed.
