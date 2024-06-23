// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">

    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>

    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.luogu.com.cn/upload/image_hosting/t4x82sfx.png)" class="imgbox" onclick="changeBg('url(https\://cdn.luogu.com.cn/upload/image_hosting/t4x82sfx.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/660673569f345e8d039c4c68.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/660673569f345e8d039c4c68.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65e85e7d9f345e8d03066196.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65e85e7d9f345e8d03066196.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/660673929f345e8d039d720b.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/660673929f345e8d039d720b.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/660673a39f345e8d039dc33c.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/660673a39f345e8d039dc33c.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/660673b09f345e8d039e003b.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/660673b09f345e8d039e003b.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/660673bd9f345e8d039e412b.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/660673bd9f345e8d039e412b.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/660673ca9f345e8d039e7ff6.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/660673ca9f345e8d039e7ff6.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/660673f19f345e8d039f2f41.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/660673f19f345e8d039f2f41.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65cca6f39f345e8d03cfccb8.th.png)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65cca6f39f345e8d03cfccb8.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65cca9619f345e8d03d992e3.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65cca9619f345e8d03d992e3.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65cca9f29f345e8d03dbf5d6.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65cca9f29f345e8d03dbf5d6.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaa209f345e8d03dcad74.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaa209f345e8d03dcad74.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccab4e9f345e8d03e1d0c2.th.png)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccab4e9f345e8d03e1d0c2.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaa629f345e8d03ddcc1b.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaa629f345e8d03ddcc1b.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaa6d9f345e8d03ddfbd3.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaa6d9f345e8d03ddfbd3.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaaeb9f345e8d03dfdd55.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaaeb9f345e8d03dfdd55.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccabcd9f345e8d03e45999.th.png)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccabcd9f345e8d03e45999.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccb5269f345e8d030c3ec7.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccb5269f345e8d030c3ec7.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccb56b9f345e8d030d789b.th.png)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccb56b9f345e8d030d789b.png)')"></a>
    </div>


    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccae889f345e8d03ef5fe5.th.png)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccae889f345e8d03ef5fe5.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccae889f345e8d03ef61c3.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccae889f345e8d03ef61c3.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccae899f345e8d03ef632b.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccae899f345e8d03ef632b.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccae899f345e8d03ef64c4.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccae899f345e8d03ef64c4.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaee99f345e8d03f0ed12.th.png)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaee99f345e8d03f0ed12.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaeea9f345e8d03f0ef69.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaeea9f345e8d03f0ef69.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaeea9f345e8d03f0f094.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaeea9f345e8d03f0f094.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/65ccaeeb9f345e8d03f0f236.th.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/65ccaeeb9f345e8d03f0f236.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(60deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg('linear-gradient(60deg, #ffd7e4 0%, #c8f1ff 100%)')"></a>
    </div>

    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #000000" onclick="changeBg('#000000')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #C5C5CC" onclick="changeBg('#C5C5CC')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7E0C6E" onclick="changeBg('#7E0C6E')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #D2B48C" onclick="changeBg('#D2B48C')"></a>
    </div>
`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
