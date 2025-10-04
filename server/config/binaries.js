module.exports.ooklaVersion = "1.2.0";
module.exports.ooklaList = [
    // MacOS
    {os: 'darwin', arch: 'x64', suffix: 'macosx-universal.tgz'},
    {os: 'darwin', arch: 'arm64', suffix: 'macosx-universal.tgz'},

    // Windows
    {os: 'win32', arch: 'x64', suffix: 'win64.zip'},

    // Linux
    {os: 'linux', arch: 'ia32', suffix: 'linux-i386.tgz'},
    {os: 'linux', arch: 'x64', suffix: 'linux-x86_64.tgz'},
    {os: 'linux', arch: 'arm', suffix: 'linux-armhf.tgz'},
    {os: 'linux', arch: 'arm64', suffix: 'linux-aarch64.tgz'},

    // FreeBSD
    {os: 'freebsd', arch: 'x64', suffix: 'freebsd12-x86_64.pkg'}
];

module.exports.libreVersion = "1.0.10";
module.exports.libreList = [
    // MacOS
    {os: 'darwin', arch: 'x64', suffix: 'darwin_amd64.tar.gz'},
    {os: 'darwin', arch: 'arm64', suffix: 'darwin_arm64.tar.gz'},

    // Windows
    {os: 'win32', arch: 'x64', suffix: 'windows_amd64.zip'},
    {os: 'win32', arch: 'ia32', suffix: 'windows_386.zip'},
    {os: 'win32', arch: 'arm64', suffix: 'windows_arm64.zip'},

    // Linux
    {os: 'linux', arch: 'x64', suffix: 'linux_amd64.tar.gz'},
    {os: 'linux', arch: 'ia32', suffix: 'linux_386.tar.gz'},
    {os: 'linux', arch: 'arm', suffix: 'linux_armv7.tar.gz'},
    {os: 'linux', arch: 'arm64', suffix: 'linux_arm64.tar.gz'},

    // FreeBSD
    {os: 'freebsd', arch: 'x64', suffix: 'freebsd_amd64.tar.gz'},
    {os: 'freebsd', arch: 'ia32', suffix: 'freebsd_386.tar.gz'},
    {os: 'freebsd', arch: 'arm', suffix: 'freebsd_armv7.tar.gz'},
    {os: 'freebsd', arch: 'arm64', suffix: 'freebsd_arm64.tar.gz'}
]