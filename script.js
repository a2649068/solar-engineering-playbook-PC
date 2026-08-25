const rows = [
  ["1", `工務協助於設計階段進行BOM資料彙整, 包括
1. 現場勘查作業.
2. 並且提供工務專業意見, 納入設計內容.
3. 工務現勘需要注意事項, 參考" 現勘回饋單 CF-192"內容執行.`, `工務工程師依照甘特圖範例所訂時程與目標推進作業, 並且配合專案經理以及專案管理師進行專案執行; 如果遇到問題, 應該即時提出討論, 無法解決, 依照權責層級逐級向上反映.`, `工務部拍攝提供免請領雜項執照需要的相關竣工照片
精進部填寫
a. 免請領雜項執照需要的竣工照片, 照片由工務部提供.
b. 再生能源發電設備完工照片. 
c. 太陽光電發電系統設置竣工試驗報告. 
專案部填寫
d. 太陽光電發電系統工程完竣證明書.
e. 建築物結構安全證明書. 
f. 太陽光電發電設備免請領雜項執照簽證表. 
g. 太陽光電發電設備結構安全證明書.
專案部收集以上資料, 填寫第三型再生能源發電設備設備登記申請表, 申請設備登記函`],
  ["2", `工程經理和工務會同專案部管理師共同討論研讀業主合約和規範, 以釐清施工要求和驗收條件.`, `1. 進場前須執行案場試水作業, 
2. 試水結果由包商以及業主會簽確認, 作為後續進場依據.
3. 工務部在BPM填寫QF-005 支架自主檢查表, 施工前 檢查項目2. 屋頂試水`, `專案併聯後, 
1. 辦理工務, 業主以及維運的初驗作業,
2. 彙整工務和業主缺失, 在BPM填寫CF-198 客戶端缺失改善追蹤,
3. 維運部在BPM填寫QF-017 缺失改善追蹤表,
4. 工務部彙整各方缺失項目, 交由承包商進行改善; 
5. 改善完成後, 工務部完成維運部和業主複驗, 由業主簽署CF-114 業主完工驗收報告,
6. 工務部在BPM填寫QF-017 缺失改善追蹤表結案.
7. 精進部開立CF-123 安裝保固維修保證書給予業主.`],
  ["3", `業務取得PO以後, 
1. 由設計部將BOM0轉入JA, 
2. 並且將設計圖面上傳至WEBISO系統; 
3. 精進部管理師下載圖面以後, 
4. 由工務部工程師以及工程經理進行圖面確認.`, `1. 工務部先行執行假設工程施工.
2. 接著工務查驗安全防護達到工安三表單( 三表單如下a. b. c.)的要求, 才可以全面施工.
a. SF-012 安全衛生危害鑑別風險與機會評估表
b. SF-013 作業清查表
c. SF-037 環境考量面鑑別及風險與機會評估表`, `1. 監控穩定上線, 
2. DREAMS資訊回傳, 
3. 台電官網" 再生能源案場加入DREAMS申請流程"附件下載附件6-安裝自主檢查表, 填寫後, 提交台電規劃課.`],
  ["4", `1. 設計部召開專案啟動會議, 邀集工務部及相關跨部門單位參與; 
2. 會議完成後, 由資材課安排承包商進行現勘, 
3. 接著交由工務部執行專案.`, `案場負責工務工程師根據圖面, 規範, 業主要求, 用戶用電設備裝置規則, 執行監工與現場施工協調.`, `配合業主需求辦理案場教育訓練`],
  ["5", `專案部管理師PM擬定專案核心目標與大方向後, 與工程經理PL共同評估其可行性.`, `承包商物料進料查驗(線槽膜厚, 線槽彎頭數量, 角鐵規格等等).`, `依約執行工程保固與案場評估`],
  ["6", `工務與業主召開『開工前啟動會議』, 會議採行實體與線上並行. 
1. 針對施工與5S規範進行前置溝通; 
2. 詢問並詳實記載業主之材料規格需求( 例如全案不鏽鋼( 白鐵)材料之具體要求).
3. 確認業主工安規範及進場查驗要求, 確認內容詳述" 業主開工前啟動會議 QF-034會議紀錄 V2".`, `1. 吊掛為危險作業, 工務須於施工三天前, 在BPM系統送出" 危險作業申請單SF-032",
2. 吊掛作業當天查驗一機三證
( 移動式起重機檢查合格證, 
移動式起重機操作技術士證, 
使用起重機具從事吊掛作業人員特殊安全衛生教育訓練班證書).
3. 移動式起重機需要有「危險性機械操作人員暨吊掛作業人員 (移動式起重機)」之職業安全衛生在職教育訓練紀錄.
4. 操作手自行填寫移動式起重機每日作業前檢點表.
5. 完成" 吊掛作業安全點檢表SF-029"`, ``],
  ["7", `1. 進度規劃: 工程經理PL考量『人機料法環』要素並且緊扣專案目標, 擬定施工甘特圖, 參考甘特圖範例
2. 節點確認: 與承包商對齊重要施工節點, 確認工務目標, 並交由專案部管理師建立最終版進度基準SS.
3. 動態調整: 過程中依據業主要求與現場實際工況彈性調整, 配合工程經理的現場動態調度.`, `現場放樣與空間核對:
1. 結構安裝: 執行支架, 鋼構, 基樁及水面型錨固之現場放樣, 確保與圖面一致.
2. 空間預留: 確認並保留遮陰, 步道, 線槽, 母索及水路等後續設施之布設空間.
QF-073 鋼筋工程自主檢查表, 檢查項目, 施工前, 放樣完成.
QF-076 錨固工程自主檢查表, 檢查項目, 施工前, TWD97圖資放樣控制點儀器基站位置確定. 
施工中, 每一浮島之單側錨固點首末放樣座標確認.
QF-077 浮台自主檢查表, 檢查項目, 施工前 放樣基準線位置確定.`, ``],
  ["8", `現勘紀錄與施工要求編製：
一. 參考" 投標廠商現勘會議紀錄 QF-034會議紀錄 V2", 編製承包商現勘紀錄表.
1.  綜合" CF-192現勘回饋單+ 業主開工前啟動會議+ 投標廠商現勘會議紀錄+ 施工工程規範( 進金生), 作為施工品質管控與驗收依據.
二. 時程規劃與圖面整合：
2. 負責編製專案施工甘特圖, , 參考甘特圖範例, 並同步進行現場圖面之整理.`, `腳座防水施作查驗完整性, 必要時再次試水. 填寫" QF-053 矽利康防水自主檢查表"`, ``],
  ["9", `工務部進場前作業要求：
1. 現場交底: 工務會同投標承包商現場實測, 依設計圖, 現勘紀錄及參考" 投標廠商現勘會議紀錄 QF-034會議紀錄 V2"進行現場說明.
2. 規範說明: 明確業主需求, 允收標準及選材規範, 避免發包後衍生追加及重工作業.
3. 三方簽認: 會議紀錄由工務, 承包商及業主現場簽名.
4. 發包通知: 返回公司以後, 即時以Email通知資材課, 工程經理, 專案部, 確保補充規範納入發包合約.`, `支架安裝與模組中側壓固定完成後, 進行螺絲扭力驗磅.
1. 抽驗標準: 依螺絲總量之1%進行隨機抽驗( 以 3,000顆為例, 共計抽驗 30 顆).
2. 合格標準: 抽驗之不合格率須為0%; 若抽驗不合格率達3%( 含)以上, 該批次須全數重新鎖固並再次報驗.
3. 填寫QF-082自主檢查表
4. 填寫QF-005支架自主檢查表, 施工中, 檢查項目, 6. 螺絲鎖緊情形、固定螺絲是否太長或未出芽情況.`, ``],
  ["10", `施工物料進場前, 包括安全欄杆, 支架, 鋼構, 盤體, 變壓器, 工務會同採購, 品保課廠驗.
填寫QF-009 高低壓配電盤廠驗自主檢查表
填寫QF-063 預力混凝土基樁材料廠驗自主檢查表
填寫QF-002 進料檢查紀錄表[關鍵物料PV模組], 檢核事項, " 出廠測試報告是否提供?" 確認方式, " 文件核對並檢附附件"`, `1. 線路整理: 模組安裝完成後, 確認串線及綁紮線路之彎曲半徑( R角)適當且固定牢固.
2. 螺絲鎖固: 螺絲如需上膠, 應於點膠後立即鎖緊; 若使用防鬆脫螺絲, 則免行點膠.
3. 驗磅時效: 螺絲鎖緊完成後, 須於 24 小時內完成扭力驗磅作業.
4. 填寫CF-114 業主完工驗收報告.
5. 太陽光電模組及組列架, 所有支架及 PV固定螺絲組合是否齊全
    (螺絲、防鬆脫附華司緊固件,廠牌__)
6. 所有螺絲是否上緊/標線
    (不包含防鬆脫螺絲)
7. 支架螺絲鎖附處(無防鬆脫螺絲處), 是否加注厭氧膠防脫落
8. 螺絲扭力數值是否符合規範

`, ``],
  ["11", `進場前, 工務填寫工安三表單, MAIL給工安課審核. 
三表單如下,
1. 環境考量面鑑別及風險與機會評估表SF-037.
2. 安全衛生危害鑑別風險與機會評估表SF-012.
3. 作業清查表SF-013 `, `取得台電審訖圖說後, 應立即辦理現場施工成果核對及圖實一致性查驗, 如發現現場施作內容與台電審訖圖說不符, 應即提出差異檢討並完成改善, 確保案場實際設置情形與核定圖說一致.`, ``],
  ["12", `施工進場前, 應依規定至勞動部職業安全衛生署「危險作業線上通報系統」完成申報, 並將通報紀錄轉寄工安課留存備查.`, `機電站施工圖繪製與查驗要求
1. 施工依據: 現場施工除依標準圖外, 應以整合完成之施工圖為主要施作依據.
2. 圖面整合: 工務應整合機電站配置圖、系統單線圖、監控圖及接地圖, 並以CAD完成詳細配管施工圖.
3. 圖面用途: 配管施工圖作為現場配管、定位、介面協調及品質查驗之依據.
4. 繪製依據: 施工圖繪製參考「施工圖範例一, 施工圖範例二」辦理.`, ``],
  ["13", `資材課完成承攬商決標後, 由精進部管理師辦理下列事項:
1. 建立案場施工聯繫群組.
2. 彙整並審查施工人員名冊、臺灣職安卡、勞保及團體保險資料.
3. 提供WEBISO標準圖以及施工圖, 並追蹤圖面確認與施工進度.
4. 施工期間如有圖面修訂, 應即時提供最新版圖資予承攬商, 確保依最新核定版本施作.`, `逆變器支架與雨遮支架圖說審查要求:
1. 審查範圍: 支架供應商( 鐵工廠商)提送之製作施工圖.
2. 審查基準: 依照" 逆變器支架與雨遮支架自主檢查表" 檢查支架尺寸, 配置及安裝介面.
3. 檢查內容: 相關審查項目及標準詳見" 逆變器支架與雨遮支架自主檢查表".`, ``],
  ["14", ``, `填寫" 雲端監控系統安裝申請表CF-143"+ " 案場資訊需求表", 寄信給生產系統開發課邱蕷中Joe, CC林承勛Ben.`, ``],
  ["15", ``, `INV與氣象箱通訊開通流程：
1. 前置作業: 確認現場INV, 氣象箱架設完畢, 且各設備通訊 ID 已設定完成.
2. 終端測通: 工務人員針對所有終端設備進行訊號連線測試.
3. 訊號確認方式( 二選一或雙重驗證):
a. 雲端查看: 使用Moxa DLM帳號登入平台, 檢視雲端數值是否正確回傳.
b. 現場點驗: 使用電腦連接Modbus Poll軟體, 直接讀取並確認設備訊號無誤.`, ``],
  ["16", ``, `案場通訊與新版監控開通流程：
1. 設備連線: 工務對接生產系統開發課邱蕷中Joe, 林承勛Ben, 由邱蕷中Joe, 林承勛Ben設定Moxa, 確認案場Moxa設備網路連線並正式上線.
2. 系統導入: 由邱蕷中Joe, 林承勛Ben協助將該案場裝置與數據, 完整接入新版監控作業系統.
3. 功能確認: 工務確保新版監控介面能正常讀取案場實時資料.`, ``],
  ["17", ``, `業主展示螢幕與 IPC 上線調測流程:
1. 硬體就位: 確認業主端現場展示螢幕、IPC 硬體皆已安裝並固定完畢。
2. 系統配置: 執行IPC參數設定( 含IP位址, 螢幕輸出解析度與遠端權限).
3. 畫面調測: 載入新版監控輪播系統, 調整看板畫面配置( Layout), 並確認展示數據輪播功能運作正常.`, ``],
  ["18", ``, `負責台電報竣與能源局審查資料之現場拍照與收集, 並彙整交予管理師.`, ``],
  ["19", ``, `負責台電報竣.`, ``],
  ["20", ``, `盤點案場剩餘的供應鏈物料, 依照供應鏈標準打包紀錄, 剩料運送回倉.`, ``],
  ["21", ``, `工務按照施工九大階段, 依序填寫QF, CF表單, 九大階段相關表單參考" 工程各式檢查表".`, ``]
];

const urls = {
  gantt:"https://docs.google.com/spreadsheets/d/1tIXjxux7260w-ORBM5ru09mXj1sEjmJuufUyJ6JJwhI/edit",
  cf192:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9RXhwbG9yYXRpb25SZSZEaXNwbGF5TmFtZT0lRTclOEYlQkUlRTUlOEIlOTglRTUlOUIlOUUlRTklQTUlOEIlRTUlOTYlQUU",
  qf005:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9UUYwMDUmRGlzcGxheU5hbWU9JUU2JTk0JUFGJUU2JTlFJUI2JUU4JTg3JUFBJUU0JUI4JUJCJUU2JUFBJUEyJUU2JTlGJUE1JUU4JUExJUE4",
  cf198:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9Q2xpZW50VHJhY2tpbmcmRGlzcGxheU5hbWU9JUU1JUFFJUEyJUU2JTg4JUI2JUU3JUFCJUFGJUU3JUJDJUJBJUU1JUE0JUIxJUU2JTk0JUI5JUU1JTk2JTg0JUU4JUJGJUJEJUU4JUI5JUE0",
  qf017:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9UUYwMTcmRGlzcGxheU5hbWU9JUU3JUJDJUJBJUU1JUE0JUIxJUU2JTk0JUI5JUU1JTk2JTg0JUU4JUJGJUJEJUU4JUI5JUE0JUU4JUExJUE4",
  cf114:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9NzcyOSZTZXJpYWxJRD1JU08yMDI1MTgtODA2NSZDbGlja3M9NTU=",
  cf123:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9MTcyNyZTZXJpYWxJRD1JU08yMDE5MTA1LTE3OTYmQ2xpY2tzPTU3",
  sf012:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9Mjc5NiZTZXJpYWxJRD1JU08yMDIwOTItMjkzNSZDbGlja3M9Nzc=",
  sf013:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9Mjc5OCZTZXJpYWxJRD1JU08yMDIwOTItMjkzNyZDbGlja3M9NTk=",
  sf037:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9MjgwMCZTZXJpYWxJRD1JU08yMDIwOTItMjkzOSZDbGlja3M9Njg=",
  attachment6:"https://drive.google.com/file/d/1K3bLxTNjZBw8A8JMWyWENxHcijSlXvTt/view?usp=sharing",
  ownerMeeting:"https://docs.google.com/document/d/1tjSrUTH_V8an6jyp-0rmXzuxQPPlimqc/edit",
  dangerous:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9RGFuZ2Vyb3VzJkRpc3BsYXlOYW1lPSVFNSU4RCVCMSVFOSU5QSVBQSVFNCVCRCU5QyVFNiVBNSVBRCVFNyU5NCVCMyVFOCVBQiU4QiVFNSU5NiVBRQ",
  sf029:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9U0YwMjkmRGlzcGxheU5hbWU9JUU1JTkwJThBJUU2JThFJTlCJUU0JUJEJTlDJUU2JUE1JUFEJUU1JUFFJTg5JUU1JTg1JUE4JUU2JUFBJUEyJUU5JUJCJTlFJUU4JUExJUE4JTVCJUU4JTg4JThBJTVE",
  qf073:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9UUYwNzMmRGlzcGxheU5hbWU9JUU5JThCJUJDJUU3JUFEJThCJUU1JUI3JUE1JUU3JUE4JThCJUU4JTg3JUFBJUU0JUI4JUJCJUU2JUFBJUEyJUU2JTlGJUE1JUU4JUExJUE4",
  qf076:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9NjI2OSZTZXJpYWxJRD1JU08yMDIzNzIwLTY1NjQmQ2xpY2tzPTMw",
  qf077:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9NjI3MCZTZXJpYWxJRD1JU08yMDIzNzIwLTY1NjUmQ2xpY2tzPTI3",
  vendorMeeting:"https://docs.google.com/document/d/1WThwgiIMPbrnw0jQ1jzuQth50wTYq4ZI/edit",
  qf053:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9UUYwNTMmRGlzcGxheU5hbWU9JUU3JTlGJUJEJUU1JTg4JUE5JUU1JUJBJUI3JUU5JTk4JUIyJUU2JUIwJUI0JUU4JTg3JUFBJUU0JUI4JUJCJUU2JUFBJUEyJUU2JTlGJUE1JUU4JUExJUE4",
  qf082:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9NzI1NCZTZXJpYWxJRD1JU08yMDI0NjEzLTc1NzQmQ2xpY2tzPTU0",
  qf009:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9UVAwMDkmRGlzcGxheU5hbWU9JUU5JUFCJTk4JUU0JUJEJThFJUU1JUEzJTkzJUU5JTg1JThEJUU5JTlCJUJCJUU3JTlCJUE0JUU1JUJCJUEwJUU5JUE1JTk3JUU4JTg3JUFBJUU0JUI4JUJCJUU2JUFBJUEyJUU2JTlGJUE1JUU4JUExJUE4",
  qf063:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9UUYwNjMmRGlzcGxheU5hbWU9JUU5JUEwJTkwJUU1JThBJTlCJUU2JUI3JUI3JUU1JTg3JTlEJUU1JTlDJTlGJUU1JTlGJUJBJUU2JUE4JTgxJUU2JTlEJTkwJUU2JTk2JTk5JUU1JUJCJUEwJUU5JUE1JTk3JUU4JTg3JUFBJUU0JUI4JUJCJUU2JUFBJUEyJUU2JTlGJUE1JUU4JUExJUE4",
  qf002:"https://eipm.acmepointes.net/acmebpm/FM7_Applicant.aspx?EinB64=SWRlbnRpZnk9UUYwMDImRGlzcGxheU5hbWU9JUU5JTgwJUIyJUU2JTk2JTk5JUU2JUFBJUEyJUU2JTlGJUE1JUU3JUI0JTgwJUU5JThDJTg0JUU4JUExJUE4JTVCJUU5JTk3JTlDJUU5JThEJUI1JUU3JTg5JUE5JUU2JTk2JTk5JTNBUFYlRTYlQTglQTElRTclQjUlODQlNUQ",
  sf037b:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9MjgwMCZTZXJpYWxJRD1JU08yMDIwOTItMjkzOSZDbGlja3M9Njc=",
  sf012b:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9Mjc5NiZTZXJpYWxJRD1JU08yMDIwOTItMjkzNSZDbGlja3M9NzY=",
  osha:"https://www.osha.gov.tw/48110/48331/48357/",
  drawing1:"https://drive.google.com/file/d/154ntctONHG2cOfk3t3rLkWJSQ96rE-WZ/view?usp=sharing",
  drawing2:"https://drive.google.com/file/d/1oAo3-vohV9aemIoGIUS0VFLUtFi1jvLI/view?usp=sharing",
  inverter:"https://docs.google.com/spreadsheets/u/0/d/1_b4awSFwZDB4ORDpQ-zqJpPjoqcjc9wr_i4VvbL8eGg/edit",
  cf143:"https://webisonup.acmepointes.net/NUPPro/ISO/ContentDetail?EinB64=VW5pcXVlSUQ9Mzc5MyZTZXJpYWxJRD1JU08yMDIxNTIxLTM5NjkmQ2xpY2tzPTU1",
  siteInfo:"https://docs.google.com/spreadsheets/u/0/d/1U-ujCk4ikyoYvWyxlABQ5hoFKnIeDndE2uWIkuBmUV0/edit",
  forms:"https://docs.google.com/spreadsheets/d/1Xjhk4zUZf3GtibHSWtR56DczcWSAeUH4aJpgYj9B0sU/edit?gid=1829824331#gid=1829824331"
};

const linksByCell = {
  B2:[["現勘回饋單 CF-192",urls.cf192]],C2:[["甘特圖範例",urls.gantt]],C3:[["QF-005 支架自主檢查表",urls.qf005]],
  D3:[["CF-198 客戶端缺失改善追蹤",urls.cf198],["QF-017 缺失改善追蹤表",urls.qf017],["CF-114 業主完工驗收報告",urls.cf114],["QF-017 缺失改善追蹤表",urls.qf017],["CF-123 安裝保固維修保證書",urls.cf123]],
  C4:[["SF-012 安全衛生危害鑑別風險與機會評估表",urls.sf012],["SF-013 作業清查表",urls.sf013],["SF-037 環境考量面鑑別及風險與機會評估表",urls.sf037]],D4:[["附件6-安裝自主檢查表",urls.attachment6]],
  B7:[["業主開工前啟動會議 QF-034會議紀錄 V2",urls.ownerMeeting]],C7:[["危險作業申請單SF-032",urls.dangerous],["吊掛作業安全點檢表SF-029",urls.sf029]],B8:[["甘特圖範例",urls.gantt]],
  C8:[["QF-073 鋼筋工程自主檢查表",urls.qf073],["QF-076 錨固工程自主檢查表",urls.qf076],["QF-077 浮台自主檢查表",urls.qf077]],B9:[["投標廠商現勘會議紀錄 QF-034會議紀錄 V2",urls.vendorMeeting],["甘特圖範例",urls.gantt]],C9:[["QF-053 矽利康防水自主檢查表",urls.qf053]],
  B10:[["投標廠商現勘會議紀錄 QF-034會議紀錄 V2",urls.vendorMeeting]],C10:[["QF-082自主檢查表",urls.qf082],["QF-005支架自主檢查表",urls.qf005]],B11:[["QF-009 高低壓配電盤廠驗自主檢查表",urls.qf009],["QF-063 預力混凝土基樁材料廠驗自主檢查表",urls.qf063],["QF-002 進料檢查紀錄表[關鍵物料PV模組]",urls.qf002]],C11:[["CF-114 業主完工驗收報告",urls.cf114]],
  B12:[["環境考量面鑑別及風險與機會評估表SF-037",urls.sf037b],["安全衛生危害鑑別風險與機會評估表SF-012",urls.sf012b],["作業清查表SF-013",urls.sf013]],B13:[["危險作業線上通報系統",urls.osha]],C13:[["施工圖範例一",urls.drawing1],["施工圖範例二",urls.drawing2]],C14:[["逆變器支架與雨遮支架自主檢查表",urls.inverter],["逆變器支架與雨遮支架自主檢查表",urls.inverter]],C15:[["雲端監控系統安裝申請表CF-143",urls.cf143],["案場資訊需求表",urls.siteInfo]],C22:[["工程各式檢查表",urls.forms]]
};

const escapeHtml = text => text.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function linkedHtml(cell, text){let html=escapeHtml(text);for(const [label,url] of (linksByCell[cell]||[])){const safe=escapeHtml(label);html=html.replace(safe,`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${safe}</a>`)}return html}

const rowsEl=document.getElementById("guidelineRows"),searchInput=document.getElementById("searchInput"),linksOnly=document.getElementById("linksOnly"),resultCount=document.getElementById("resultCount"),emptyState=document.getElementById("emptyState");
const stateKey="engineering-guidelines-desktop-view";
let savedState={};
try{savedState=JSON.parse(localStorage.getItem(stateKey)||"{}")}catch(_error){savedState={}}
let activeStage=["all","before","during","after"].includes(savedState.stage)?savedState.stage:"all";
searchInput.value=savedState.search||"";
linksOnly.checked=Boolean(savedState.linksOnly);
function saveState(){savedState={stage:activeStage,search:searchInput.value,linksOnly:linksOnly.checked,scrollY:window.scrollY};localStorage.setItem(stateKey,JSON.stringify(savedState))}
function syncStageButtons(){document.querySelectorAll(".stage-tabs button").forEach(button=>button.classList.toggle("active",button.dataset.stage===activeStage))}
const stepNav=document.getElementById("stepNav");
rows.forEach(row=>{const button=document.createElement("button");button.type="button";button.textContent=row[0];button.dataset.step=row[0];button.setAttribute("aria-label",`前往步驟 ${row[0]}`);button.addEventListener("click",()=>document.getElementById(`step-${row[0]}`)?.scrollIntoView({behavior:"smooth",block:"start"}));stepNav.appendChild(button)});
document.getElementById("backToTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
function render(){const q=searchInput.value.trim().toLowerCase();let visible=0;const visibleSteps=new Set();rowsEl.innerHTML="";rows.forEach((row,index)=>{const sheetRow=index+2;const cells=[{key:`B${sheetRow}`,stage:"before",text:row[1]},{key:`C${sheetRow}`,stage:"during",text:row[2]},{key:`D${sheetRow}`,stage:"after",text:row[3]}];const filtered=cells.map(c=>{const stageOk=activeStage==="all"||activeStage===c.stage;const queryOk=!q||c.text.toLowerCase().includes(q);const linkOk=!linksOnly.checked||(linksByCell[c.key]||[]).length>0;return{...c,show:stageOk&&queryOk&&linkOk}});if(!filtered.some(c=>c.show))return;visible++;visibleSteps.add(row[0]);const article=document.createElement("article");article.className="guideline-row";article.id=`step-${row[0]}`;article.innerHTML=`<div class="step-cell">${escapeHtml(row[0])}</div>`+filtered.map(c=>`<div class="content-cell ${c.show?"":"stage-hidden"}" data-stage="${c.stage}">${linkedHtml(c.key,c.text)}</div>`).join("");rowsEl.appendChild(article)});stepNav.querySelectorAll("button").forEach(button=>button.hidden=!visibleSteps.has(button.dataset.step));resultCount.textContent=`顯示 ${visible} 筆`;emptyState.hidden=visible!==0}
searchInput.addEventListener("input",()=>{render();saveState()});
linksOnly.addEventListener("change",()=>{render();saveState()});
document.querySelectorAll(".stage-tabs button").forEach(button=>button.addEventListener("click",()=>{activeStage=button.dataset.stage;syncStageButtons();render();saveState()}));
document.addEventListener("click",event=>{if(event.target.closest("a"))saveState()});
window.addEventListener("pagehide",saveState);
window.addEventListener("pageshow",()=>{syncStageButtons();render();const y=Number(savedState.scrollY)||0;requestAnimationFrame(()=>window.scrollTo(0,y))});
syncStageButtons();
render();
requestAnimationFrame(()=>window.scrollTo(0,Number(savedState.scrollY)||0));
