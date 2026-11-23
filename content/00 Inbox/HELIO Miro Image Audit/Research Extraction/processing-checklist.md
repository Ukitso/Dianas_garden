# Local processing checklist

Read content/Start Here.md in full; the requested legacy path content/!Start Here.md does not exist in this checkout. The previous audit README.md is also absent. The existing inventory, downloaded images and contact sheets were inspected instead.

## Local availability

- Inventory: 354 image objects and 216 distinct source asset IDs.
- Existing originals: 21 unique assets, already downloaded.
- Missing originals: 195 unique assets.
- The CSV contains source asset IDs, but no original download URLs. No saved original URLs are available for the missing 195 assets; no URL has been assumed usable.
- Additional Miro requests required to retrieve missing assets: up to 195 image_get_url requests, one per unique asset using a representative object ID. Direct downloads after URL retrieval do not require Miro calls. If any URL fails, image_get_data might require one extra call per failed asset; failures cannot be estimated in advance.
- Miro requests used in this continuation: 0.
- Local OCR processed: 21/216 unique assets currently available. Detections on 15; no detections on 6; runtime errors: 0. Manual review classified 10 as meaningful text, 5 detections as false positives, and 6 as no detections.\n- The other 195 unique assets are missing locally and remain unprocessed.

## OCR tooling checked

No OCR executable or Python OCR package was initially available, and the installed Swift compiler could not load the macOS Vision SDK. RapidOCR with ONNX Runtime was then installed in temporary storage at /private/tmp/helio-rapidocr. Its local model files were available there; inference ran locally. No image was sent to an external OCR service. The temporary install is outside the vault and not part of the staged output.

## Next processing order

1. Use the existing 21 original files.
2. Obtain a working local OCR engine before extracting text.
3. Retrieve the 195 missing originals only after the stated request estimate is reviewed.
4. Process unique assets once; use inventory object IDs for all placements.

No permanent vault notes, templates, settings, Quartz files or Miro content were changed.
