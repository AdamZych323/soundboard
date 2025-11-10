const fs = require("fs");
const path = require("path");

const ASSETS_DIR = path.join(__dirname, "..", "assets");
const MANIFEST_OUTPUT_PATH = path.join(ASSETS_DIR, "recording-list.json");
const RECORDINGS_DIR = path.join(ASSETS_DIR, "recordings");
const PATH_PREFIX_TO_REMOVE = path.join(RECORDINGS_DIR) + path.sep;

function walkDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== "node_modules") {
                walkDir(filePath, fileList);
            }
        } else if (file !== path.basename(MANIFEST_OUTPUT_PATH)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

try {
    console.log("Generating assets manifest...");

    const absolutePaths = walkDir(RECORDINGS_DIR);

    const relativePaths = absolutePaths.map((absolutePath) => {
        let relativePath = absolutePath.replace(PATH_PREFIX_TO_REMOVE, "");

        relativePath = relativePath.replace(/\\/g, "/");

        return "assets/recordings/" + relativePath;
    });

    fs.writeFileSync(
        MANIFEST_OUTPUT_PATH,
        JSON.stringify(relativePaths, null, 2),
        "utf-8"
    );

    console.log(
        `Assets manifest written to ${path.basename(MANIFEST_OUTPUT_PATH)}.`
    );
    console.log(`Found ${relativePaths.length} files.`);
} catch (error) {
    console.error("Error generating assets manifest:", error);
    process.exit(1);
}
