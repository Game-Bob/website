import { execSync } from "child_process";

const BUGFIX_PREFIXES = ["fix/", "bugfix/", "hotfix/", "patch/"];

function getVersionType(branch) {
    for (const prefix of BUGFIX_PREFIXES) {
        if (branch.startsWith(prefix)) return "patch";
    }
    return "minor";
}

function main() {
    try {
        const branchOutput = execSync("git branch --show-current").toString();
        const branch = branchOutput.trim();
        const versionType = getVersionType(branch);

        console.log(`[Version Bump] Branch: ${branch}, Type: ${versionType}`);
        execSync(`npm version ${versionType} --no-git-tag-version`);
        execSync("git add package.json package-lock.json");
        console.log(`[Version Bump] Successfully bumped to ${versionType}`);
    } catch (error) {
        console.error("[Version Bump] Error:", error.message);
        process.exit(1);
    }
}

main();
