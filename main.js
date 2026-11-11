/**
 * ARISE 39081 - Ams Robotics Innovation Science Engineering
 * In Unified Alliance with GreenAms Robotics Team (GART) FTC #24751
 * Hanoi - Amsterdam High School for Gifted (THPT Chuyên Hà Nội - Amsterdam)
 * 
 * Features:
 * - Google Fonts Montserrat Typography (matching greenams.com)
 * - 3D Three.js Origami Cyber Crane with Viewport HUD & Wireframe mode
 * - 2D Interactive Cosmic Starfield with dynamic constellation linkage
 * - Dual Subsystem Explorer: ARISE Phoenix Prime v2.4 + GART Bamboo Bot (FTC DECODE)
 * - Verified Sister Team Data (FTC #24751, Houston World Championship Finalists, Edison Champions)
 * - Official Sponsors (MCC Semi, Geleximco, CMC Telecom, Qualcomm)
 * - Full EN/VI Bilingual Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. STATE & EXTENSIVE BILINGUAL TRANSLATIONS
    // -------------------------------------------------------------
    let isLightMode = false;
    let currentLang = "en";
    let wingFlapSpeed = 1.0;
    let isWireframeMode = false;
    let activeRobotMode = "arise"; // "arise" or "bamboo"

    const translations = {
        en: {
            langName: "English",
            brandSubtitle: "HANOI - AMSTERDAM HIGH SCHOOL FOR GIFTED",
            navHome: "HOME",
            navStory: "STORY",
            navEcosystem: "ECOSYSTEM",
            navRobot: "THE ROBOT",
            navSubsystems: "SUBSYSTEMS",
            navDivisions: "DIVISIONS",
            navSponsors: "SPONSORS",
            navAwards: "AWARDS",
            navFaq: "FAQ",
            navContact: "CONTACT",
            scrollText: "SCROLL FOR MORE",

            // Hero
            slogan: '"When I say Ams, you say Rise!"',
            hudIso: "ISO",
            hudFront: "FRONT",
            hudTop: "TOP",
            hudWing: "WING",
            hudWireframe: "WIREFRAME",

            // Story
            storyTag: "THE ODYSSEY",
            aboutWord1: "ABOUT",
            aboutWord2: "US",
            aboutSubtitle: "Robotics Team <strong>ARISE 39081</strong>, affiliated with HANOI - AMSTERDAM HIGH SCHOOL FOR GIFTED — a cradle of global excellence, technological innovation, and world-class elite youth.",
            storyP1: "Forged within Hanoi - Amsterdam High School for Gifted, ARISE 39081 represents the relentless pursuit of engineering mastery, scientific curiosity, and collaborative innovation in FIRST Tech Challenge competitions.",
            storyP2: "Guided by the core philosophy of <em>Gracious Professionalism®</em>, our students design, fabricate, wire, and program competition robots from the ground up, proving that Vietnamese high school engineers stand shoulder-to-shoulder on the international stage.",

            pillar1Title: "Ingenuity & Precision",
            pillar1Desc: "100% custom CAD design, CNC aluminum machining, and carbon-fiber 3D printing engineered to millimeter tolerances.",
            pillar2Title: "Gracious Professionalism®",
            pillar2Desc: "Fierce competition balanced with genuine camaraderie, assisting peer teams with spare parts, code, and mentorship.",
            pillar3Title: "STEM Community Outreach",
            pillar3Desc: "Hosting hands-on workshops and mentoring hundreds of middle-school students to spark the next generation of engineers.",
            pillar4Title: "Global Ambition",
            pillar4Desc: "Representing Hanoi - Amsterdam at prestigious national and international championships with unwavering determination.",

            // Sister Team Ecosystem (GreenAms FTC 24751 Integration)
            ecoTag: "AMS ROBOTICS ECOSYSTEM",
            ecoTitle1: "UNITED UNDER",
            ecoTitle2: "ONE CREST",
            ecoDesc: "Hanoi - Amsterdam High School for Gifted proudly fosters a world-class robotics heritage with two premier FIRST Tech Challenge teams leading Vietnam:",
            ecoAriseTitle: "ARISE 39081 (FTC Division)",
            ecoAriseDesc: "FIRST Tech Challenge powerhouse focusing on high-speed agile robotics, autonomous vision intelligence, and compact modular engineering.",
            ecoGreenTitle: "GreenAms Robotics Team 24751",
            ecoGreenDesc: "Vietnam's champion FIRST Tech Challenge team from Hanoi - Amsterdam High School. Houston World Championship Finalist Alliance & Edison Division Champions (USA), competing in FTC DECODE 2025–2026. Creators of the open-source Bamboo Bot.",
            ecoLinkBtn: "Visit greenams.com",

            // Robot
            robotTag: "COMPETITION MACHINE",
            robotTitle1: "PHOENIX",
            robotTitle2: "PRIME v2.4",
            robotDesc: "Our flagship FTC competition robot engineered for speed, reliability, and precision scoring under extreme match pressures.",
            stat1Label: "MAX DRIVE SPEED",
            stat1Val: "2.8 m/s",
            stat2Label: "AUTO ACCURACY",
            stat2Val: "99.4%",
            stat3Label: "CYCLE TIME",
            stat3Val: "2.2 s",
            stat4Label: "MAX REACH",
            stat4Val: "1.8 m",

            // Subsystems Explorer
            subTag: "INTERACTIVE ENGINEERING EXPLORER",
            subTitle1: "ROBOT",
            subTitle2: "SUBSYSTEMS",
            subSubtitle: "Explore the internal mechanics of ARISE's Phoenix Prime v2.4 and GreenAms's open-source Bamboo Bot (FTC DECODE 2025–2026):",

            // Robot Selector Buttons
            robotSelectArise: "PHOENIX PRIME v2.4 (ARISE #39081)",
            robotSelectBamboo: "BAMBOO BOT (GART #24751 OPEN-SOURCE)",

            // ARISE Subsystem Tabs
            subDrivetrainBtn: "Mecanum Drive",
            subOdometryBtn: "Odometry AI",
            subIntakeBtn: "Intake Transfer",
            subLiftBtn: "Telescoping Lift",
            subVisionBtn: "Computer Vision",

            // GreenAms Bamboo Bot Subsystem Tabs
            bambooDrivetrainBtn: "Modified Tank Drive",
            bambooIntakeBtn: "Rubber Band Intake",
            bambooTransferBtn: "Gravity Transfer",
            bambooFeedBtn: "Servo Feeding",
            bambooShooterBtn: "Flywheel Shooter",

            // Subsystem Detail Texts - ARISE
            subDrivetrainTitle: "Mecanum Holonomic Drivetrain",
            subDrivetrainSpecs: "GoBilda Strafer chassis powered by 4x YellowJacket 19.2:1 planetary gear motors (312 RPM). Equipped with 96mm precision rollers for instantaneous 360° omnidirectional translation, vector drifting, and rapid evasion.",
            subOdometryTitle: "3-Wheel Dead-Wheel Optical Odometry",
            subOdometrySpecs: "Triple spring-loaded custom omni tracking pods with REV Through-Bore optical encoders (8192 CPR). Fused with an Extended Kalman Filter (EKF) and BNO055 IMU gyroscope, achieving sub-millimeter localization drift even after high-speed impacts.",
            subIntakeTitle: "High-Throughput Active Intake",
            subIntakeSpecs: "Compliant silicone star-wheels coupled with a dual-stage compliant ramp. Ingests game elements in under 0.25 seconds, automatically centering them into the internal transfer bucket with zero jamming.",
            subLiftTitle: "UHMWPE Telescoping Linear Slides",
            subLiftSpecs: "Cascading 3-stage custom SAR30 aluminum extrusion slides rigged with braided UHMWPE synthetic cord. Powered by dual high-speed servos, expanding from 35cm to 1.8 meters in 0.8s for high-basket deposits and endgame suspension.",
            subVisionTitle: "OpenCV AprilTag & Color Tracking",
            subVisionSpecs: "Wide-angle C920 HD optical sensor streaming directly into an optimized OpenCV pipeline running on REV Control Hub. Delivers 60 FPS real-time AprilTag 3D pose estimation and target color segmentation for 100% autonomous consistency.",

            // Subsystem Detail Texts - BAMBOO BOT (From greenams.com)
            bambooDrivetrainTitle: "Modified Tank Drive with Ball Bearings",
            bambooDrivetrainSpecs: "The robot utilizes a Modified Tank Drive system with two 100mm traction wheels providing main traction, combined with 4 ball transfer bearings replacing costly omni wheels to drastically reduce manufacturing costs while ensuring smooth 360° rotational agility.",
            bambooIntakeTitle: "Rubber Band High-Friction Intake",
            bambooIntakeSpecs: "A rotating shaft laced with rubber bands creates high friction, gently and efficiently pulling balls from the floor into the robot. The rubber bands are ubiquitous, low-cost, and tension-adjustable for different ball dimensions.",
            bambooTransferTitle: "Gravity-Assisted Dual-Ball Transfer",
            bambooTransferSpecs: "Balls are pushed up a sloped trough by the intake roller, then roll down automatically into shooting position using gravity. The system stores up to 2 balls: 1 chambered and ready to shoot, and 1 waiting in the buffer trough.",
            bambooFeedTitle: "Servo Rubber-Band Feeder Gate",
            bambooFeedSpecs: "A dedicated servo motor with a rubber-band-coated shaft lifts the ball into contact with the front gate of the flywheel. Once the gate triggers, the servo smoothly indexes the ball into the spinning flywheel.",
            bambooShooterTitle: "Single High-Speed Flywheel Shooter",
            bambooShooterSpecs: "A single flywheel spinning at high RPM transfers immense kinetic energy to the ball upon contact. The minimalist single-motor design conserves electrical resources, minimizes weight, is easy to maintain, and allows flexible shooting angle adjustment.",

            bambooCadBtn: "View Onshape CAD",
            bambooCodeBtn: "View GitHub Code",

            // Impact Figures (GreenAms + ARISE)
            figTag: "MEASURABLE IMPACT",
            figTitle1: "AMS ROBOTICS",
            figTitle2: "MILESTONES",
            figDesc: "Verified season statistics reflecting the international reach and competitive leadership of Hanoi - Amsterdam robotics:",
            fig1Val: "142,000+",
            fig1Label: "Global Media Impressions & Views",
            fig2Val: "60+",
            fig2Label: "Connected Robotics Teams Globally",
            fig3Val: "5,000+",
            fig3Label: "Youth Reached via Camps & Events",
            fig4Val: "World Finalist",
            fig4Label: "Houston World Championship 2025",

            // Divisions
            divTag: "OUR DEPARTMENTS",
            divTitle1: "SPECIALIZED",
            divTitle2: "DIVISIONS",
            divSubtitle: "Four multidisciplinary branches working in complete synergy to build world-class robotic systems.",

            divMechTitle: "Mechanical & CAD",
            divMechDesc: "SolidWorks & Onshape 3D modeling, FEA stress analysis, precision CNC machining, and rapid additive manufacturing.",
            divProgTitle: "Software & Autonomous",
            divProgDesc: "FTC Java SDK, RoadRunner motion profiling, Pure Pursuit path tracking, and computer vision pipelines.",
            divElecTitle: "Electronics & Control",
            divElecDesc: "REV Robotics Control Hub architectures, custom wiring harnesses, power distribution, and laser ToF sensors.",
            divOutTitle: "Outreach & Business",
            divOutDesc: "15-page Engineering Portfolio authoring, sponsorship procurement, budget management, and community STEM classes.",

            // Sponsorship Tiers
            sponsTag: "SUPPORT THE FUTURE",
            sponsTitle1: "SPONSORSHIP",
            sponsTitle2: "PACKAGES",
            sponsSubtitle: "We are deeply grateful to our visionary corporate partners and alumni for fueling our journey to international robotics excellence.",
            tierDiamondName: "Diamond Partner",
            tierDiamondAmount: "$5,000+ / 50M+ VND",
            tierDiamondPerk1: "Prominent primary logo on Robot Chassis & Competition Banner",
            tierDiamondPerk2: "Large logo placement on all Team Jerseys & Media backdrops",
            tierDiamondPerk3: "Exclusive 2-page feature in the official Engineering Portfolio",
            tierDiamondPerk4: "Keynote invitation to team launch events & workshops",

            tierGoldName: "Gold Partner",
            tierGoldAmount: "$3,400+ / 25M+ VND",
            tierGoldPerk1: "Prominent logo on Robot Body panels",
            tierGoldPerk2: "Logo on Team Uniforms & official website header",
            tierGoldPerk3: "Full-page company profile in the Engineering Portfolio",
            tierGoldPerk4: "Dedicated social media spotlight and recruitment access",

            tierSilverName: "Silver Partner",
            tierSilverAmount: "$1,700+ / 10M+ VND",
            tierSilverPerk1: "Logo placement on Team Banner & pit booth",
            tierSilverPerk2: "Logo on official team website sponsor shelf",
            tierSilverPerk3: "Half-page feature in Engineering Portfolio",

            tierBronzeName: "Bronze Partner",
            tierBronzeAmount: "$400+ / 5M+ VND",
            tierBronzePerk1: "Name and logo on website sponsor wall",
            tierBronzePerk2: "Quarter-page acknowledgment in Portfolio",

            sponsCtaBtn: "BECOME A SPONSOR",
            partnersHeading: "VERIFIED PARTNERS & SUPPORTERS",
            partnersSubheading: "Proudly backed by leading technology corporations and national organizations:",

            // Awards
            awardsTag: "HALL OF HONORS",
            awardsTitle1: "PROUD",
            awardsTitle2: "MILESTONES",
            awardsSubtitle: "Milestones that cement Hanoi - Amsterdam's reputation as Vietnam's top robotics hub on the world stage:",
            award1Year: "2024–2025",
            award1Title: "FIRST World Championship Finalist Alliance",
            award1Desc: "Edison Division Champions & World Championship Finalists in Houston, USA. Made history for Vietnam robotics.",
            award2Year: "2024–2025",
            award2Title: "Vietnam Championship Winning Alliance Captain & Design Award",
            award2Desc: "Ranked as the champion alliance captain and selected as one of only two teams representing Vietnam at the World Championship.",
            award3Year: "2023–2024",
            award3Title: "Vietnam Championship Winning Alliance Captain & Innovate Award",
            award3Desc: "Ranked #1 across all robot performance metrics with groundbreaking mechanical intake innovation.",
            award4Year: "2025–2026",
            award4Title: "Open-Source Bamboo Bot & 15+ STEM Camps",
            award4Desc: "Engineered Vietnam's first open-source FTC robot for FTC DECODE and trained over 5,000 youth through GART Expo & Wonderlab.",

            // FAQ
            faqTag: "COMMON INQUIRIES",
            faqTitle1: "FREQUENTLY ASKED",
            faqTitle2: "QUESTIONS",
            faqQ1: "What benefits do sponsors receive when partnering with our robotics teams?",
            faqA1: "Sponsors gain premier brand visibility on our robot chassis, team apparel, event banners, international tournament livestreams, and within our official Engineering Portfolio distributed to judges and industry leaders worldwide.",
            faqQ2: "What is FIRST Tech Challenge (FTC) and why does it matter?",
            faqA2: "FIRST Tech Challenge is the world's premier high school robotics competition founded by inventor Dean Kamen. Students design, build, and program robots to compete in dynamic 2v2 arena games with a 30-second autonomous period and a 2-minute driver-controlled period.",
            faqQ3: "How do ARISE 39081 and GreenAms 24751 cooperate?",
            faqA3: "Both ARISE 39081 and GreenAms 24751 are FIRST Tech Challenge sister teams from Hanoi - Amsterdam High School for Gifted ('When I say Ams, you say Rise!' & 'When I say Green, you say Ams!'). We share research facilities, co-develop open-source robotics like Bamboo Bot, host collaborative STEM workshops (GART Expo, Wonderlab), and build a world-class training pipeline for Vietnamese students.",
            faqQ4: "How can high school students join our robotics teams?",
            faqA4: "We hold annual recruitment trials every autumn for Hanoi - Amsterdam students, welcoming passionate minds across mechanical design, programming, electronics, and business outreach. No prior experience is required—only curiosity and dedication!",
            faqQ5: "How can other teams or organizations collaborate with us?",
            faqA5: "Teams and organizations can partner with us through technical mentorship, co-hosted workshops, STEM camps, sponsorship, or open-source CAD & code exchanges. We warmly welcome collaborations that empower the robotics community in Vietnam and worldwide.",

            // Contact
            contactTag: "JOIN OUR JOURNEY",
            contactTitle1: "SPONSOR &",
            contactTitle2: "CONNECT",
            contactDesc: "Partner with Hanoi - Amsterdam robotics teams to empower Vietnam's brightest young engineering minds as we push the frontiers of technology.",
            contactNamePlaceholder: "Your Name / Organization",
            contactEmailPlaceholder: "Your Email Address",
            contactMsgPlaceholder: "Message / Sponsorship inquiry...",
            contactSendBtn: "TRANSMIT MESSAGE",
            contactSuccess: "Thank you! Your message has been received by the team.",
            addressLabel: "Headquarters",
            addressVal: "Hanoi - Amsterdam High School for Gifted, 1 Hoang Minh Giam, Cau Giay, Hanoi, Vietnam",
            leadershipLabel: "Team Leadership & Contacts",
            coachTitle: "Head Coach: Mr. Hai Dang",
            coachContact: "ngnhaidangvn@gmail.com • (+84) 968 228 118",
            managerTitle: "Team Manager: Mr. Thanh Tung",
            managerContact: "tungnt@hnams.edu.vn • (+84) 968 666 245",
            ariseContactTitle: "ARISE 39081 Inquiries",
            ariseContactVal: "arise.ams39081@gmail.com"
        },
        vi: {
            langName: "Tiếng Việt",
            brandSubtitle: "THPT CHUYÊN HÀ NỘI - AMSTERDAM",
            navHome: "TRANG CHỦ",
            navStory: "CÂU CHUYỆN",
            navEcosystem: "HỆ SINH THÁI",
            navRobot: "CỖ MÁY",
            navSubsystems: "CƠ CẤU",
            navDivisions: "PHÂN BAN",
            navSponsors: "TÀI TRỢ",
            navAwards: "THÀNH TÍCH",
            navFaq: "HỎI ĐÁP",
            navContact: "LIÊN HỆ",
            scrollText: "CUỘN XUỐNG ĐỂ KHÁM PHÁ",

            // Hero
            slogan: '"When I say Ams, you say Rise!"',
            hudIso: "GÓC 3D",
            hudFront: "CHÍNH DIỆN",
            hudTop: "TỪ TRÊN",
            hudWing: "CÁNH",
            hudWireframe: "LƯỚI DÂY",

            // Story
            storyTag: "HÀNH TRÌNH ĐỘT PHÁ",
            aboutWord1: "VỀ",
            aboutWord2: "CHÚNG TÔI",
            aboutSubtitle: "Đội tuyển Robotics <strong>ARISE 39081</strong> trực thuộc Trường THPT Chuyên Hà Nội - Amsterdam, cái nôi hội tụ tinh hoa tri thức, vươn tầm thế giới và dẫn đầu phong trào khoa học công nghệ trẻ.",
            storyP1: "Được tôi luyện dưới mái trường THPT Chuyên Hà Nội - Amsterdam, ARISE 39081 là biểu tượng của tinh thần dấn thân, say mê khoa học kỹ thuật và khát vọng chinh phục những đỉnh cao công nghệ robotics toàn cầu tại đấu trường FIRST Tech Challenge.",
            storyP2: "Thấm nhuần triết lý <em>Gracious Professionalism®</em>, các kỹ sư trẻ tự tay thiết kế, chế tạo cơ khí, đi dây mạch và lập trình thuật toán điều khiển cho cỗ máy thi đấu, khẳng định bản lĩnh của học sinh Việt Nam trên đấu trường quốc tế.",

            pillar1Title: "Đột Phá & Chuẩn Xác",
            pillar1Desc: "100% tự thiết kế CAD, gia công phay tiện CNC nhôm và in 3D sợi carbon đạt độ chính xác đến từng milimet.",
            pillar2Title: "Gracious Professionalism®",
            pillar2Desc: "Thi đấu hết mình nhưng luôn tôn trọng, sẵn sàng chia sẻ linh kiện, hỗ trợ kỹ thuật và bắt tay cùng các đội bạn.",
            pillar3Title: "Lan Tỏa STEM Cộng Đồng",
            pillar3Desc: "Tổ chức các lớp học Robotics trải nghiệm thực tế, thắp lên ngọn lửa đam mê khoa học cho học sinh THCS thủ đô.",
            pillar4Title: "Khát Vọng Toàn Cầu",
            pillar4Desc: "Đại diện cho niềm tự hào Amser tham dự các đấu trường Robotics quy mô quốc tế với ý chí kiên định.",

            // Sister Team Ecosystem (GreenAms FTC 24751 Integration)
            ecoTag: "HỆ SINH THÁI ROBOTICS TRƯỜNG AMS",
            ecoTitle1: "CHUNG MỘT",
            ecoTitle2: "MÀU CỜ SẮC ÁO",
            ecoDesc: "Trường THPT Chuyên Hà Nội - Amsterdam tự hào là cái nôi nuôi dưỡng hai đội tuyển robotics hàng đầu đất nước thi đấu tại FIRST Tech Challenge:",
            ecoAriseTitle: "ARISE 39081 (Đội Tuyển FTC)",
            ecoAriseDesc: "Đại diện ưu tú thi đấu tại FIRST Tech Challenge, tập trung vào robot tốc độ cao, định vị thị giác AI và thiết kế module cơ điện tử nhỏ gọn.",
            ecoGreenTitle: "GreenAms Robotics Team 24751",
            ecoGreenDesc: "Đội tuyển FIRST Tech Challenge hàng đầu Việt Nam từ THPT Chuyên Hà Nội - Amsterdam. Liên minh Á quân Thế giới & Vô địch bảng Edison tại Houston, Hoa Kỳ; tranh tài tại mùa giải FTC DECODE 2025–2026. Tác giả dự án robot mở Bamboo Bot.",
            ecoLinkBtn: "Ghé thăm greenams.com",

            // Robot
            robotTag: "CHIẾN BINH ROBOTICS",
            robotTitle1: "PHOENIX",
            robotTitle2: "PRIME v2.4",
            robotDesc: "Cỗ máy thi đấu chủ lực của đội được tối ưu hóa cho tốc độ di chuyển linh hoạt, độ bền bỉ và hiệu suất ghi điểm tuyệt đối dưới áp lực thời gian.",
            stat1Label: "VẬN TỐC TỐI ĐA",
            stat1Val: "2.8 m/s",
            stat2Label: "ĐỘ CHÍNH XÁC AUTO",
            stat2Val: "99.4%",
            stat3Label: "CHU KỲ GHI ĐIỂM",
            stat3Val: "2.2 s",
            stat4Label: "TẦM VỚI TỐI ĐA",
            stat4Val: "1.8 m",

            // Subsystems Explorer
            subTag: "BẢN VẼ TƯƠNG TÁC CHI TIẾT",
            subTitle1: "CÁC CƠ CẤU",
            subTitle2: "KỸ THUẬT (SUBSYSTEMS)",
            subSubtitle: "Khám phá kiến trúc cơ điện tử chuyên sâu của Phoenix Prime v2.4 (ARISE) và robot mở Bamboo Bot (GreenAms FTC #24751):",

            // Robot Selector Buttons
            robotSelectArise: "PHOENIX PRIME v2.4 (ARISE #39081)",
            robotSelectBamboo: "BAMBOO BOT (GART #24751 OPEN-SOURCE)",

            // ARISE Subsystem Tabs
            subDrivetrainBtn: "Khung Gầm Mecanum",
            subOdometryBtn: "Định Vị Odometry",
            subIntakeBtn: "Tay Gắp & Nạp",
            subLiftBtn: "Tháp Nâng Đa Tầng",
            subVisionBtn: "Thị Giác AI OpenCV",

            // GreenAms Bamboo Bot Subsystem Tabs
            bambooDrivetrainBtn: "Di Chuyển (Tank Drive)",
            bambooIntakeBtn: "Thu Bóng (Dây Chun)",
            bambooTransferBtn: "Vận Chuyển Bóng",
            bambooFeedBtn: "Đẩy Bóng (Servo)",
            bambooShooterBtn: "Bắn Bóng (Flywheel)",

            // Subsystem Detail Texts - ARISE
            subDrivetrainTitle: "Hệ Dẫn Động Bánh Xe Mecanum Xoay Đa Hướng",
            subDrivetrainSpecs: "Bộ khung GoBilda Strafer trang bị 4 động cơ giảm tốc hành tinh YellowJacket 19.2:1 (312 RPM). Sử dụng 4 bánh xe Mecanum 96mm với các con lăn góc 45° cho phép robot drift, xoay tròn 360° tức thời và né tránh va chạm thần tốc.",
            subOdometryTitle: "Hệ Thống Định Vị 3-Wheel Dead-Wheel Odometry",
            subOdometrySpecs: "Cụm 3 bánh lăn quang học độc lập sử dụng bộ mã hóa vòng quay REV Through-Bore (8192 xung/vòng). Tích hợp thuật toán lọc Kalman mở rộng (EKF) và cảm biến con quay hồi chuyển BNO055, duy trì sai số định vị tọa độ dưới 1mm.",
            subIntakeTitle: "Hệ Cơ Cấu Nạp Mẫu Vật Tốc Độ Cao (Active Intake)",
            subIntakeSpecs: "Trục bánh xe sao silicone mềm kết hợp máng dẫn hướng 2 tầng. Tốc độ nuốt mẫu vật chỉ 0.25 giây, tự động cân chỉnh mẫu vật vào buồng chứa trung gian với tỉ lệ kẹt mẫu vật bằng 0%.",
            subLiftTitle: "Tháp Nâng Tuyến Tính Đa Tầng Cáp UHMWPE",
            subLiftSpecs: "Cơ cấu trượt nhôm extrusion SAR30 đa tầng liên kết nối tiếp bằng dây cước UHMWPE chịu tải cao. Vận hành bởi 2 servo mô-men xoắn cực đại, vươn cao từ 35cm lên 1.8m trong 0.8 giây để thả mẫu vật và đu xà kết thúc trận.",
            subVisionTitle: "Thị Giác Máy Tính AI Nhận Diện AprilTag",
            subVisionSpecs: "Camera quang học góc rộng truyền dữ liệu trực tiếp về bộ điều khiển REV Control Hub. Pipeline xử lý hình ảnh OpenCV 60 FPS ước tính vị trí 3D của AprilTag và phân loại mẫu vật theo màu sắc, mang lại tỷ lệ thành công 100% trong 30s tự hành.",

            // Subsystem Detail Texts - BAMBOO BOT (From greenams.com)
            bambooDrivetrainTitle: "Hệ Thống Di Chuyển Modified Tank Drive (Bi Mắt Trâu)",
            bambooDrivetrainSpecs: "Robot sử dụng hệ thống Modified Tank Drive với 2 bánh traction wheel 100mm cung cấp lực kéo chính, kết hợp 4 bi mắt trâu thay thế bánh omni đắt tiền để giảm chi phí nhưng vẫn đảm bảo khả năng xoay tròn 360° cực kỳ linh hoạt.",
            bambooIntakeTitle: "Cơ Cấu Thu Bóng Bằng Trục Dây Chun Ma Sát",
            bambooIntakeSpecs: "Trục quay có dây chun tạo ma sát cao, kéo bóng từ sàn vào bên trong robot một cách êm ái và hiệu quả. Dây chun dễ tìm, giá rẻ, và có thể điều chỉnh độ căng linh hoạt phù hợp với từng loại bóng thi đấu.",
            bambooTransferTitle: "Hệ Thống Máng Trọng Lực Chứa 2 Bóng",
            bambooTransferSpecs: "Bóng được đẩy lên máng dốc bởi intake roller, sau đó tự động lăn xuống vị trí bắn nhờ trọng lực. Hệ thống chứa được 2 bóng: 1 bóng sẵn sàng bắn và 1 bóng đang chờ sẵn trong máng.",
            bambooFeedTitle: "Cơ Cấu Đẩy Bóng Lên Flywheel (Servo Chun)",
            bambooFeedSpecs: "Servo motor có trục quay bằng dây chun tạo ma sát sẽ nâng bóng lên tiếp xúc với cổng trước flywheel. Sau khi cổng mở, servo sẽ đẩy bóng lên để tiếp xúc chuẩn xác với bánh đà flywheel.",
            bambooShooterTitle: "Hệ Thống Bắn Bóng Single Flywheel Tốc Độ Cao",
            bambooShooterSpecs: "Hệ thống single flywheel quay tốc độ cao truyền động năng cho bóng khi tiếp xúc. Thiết kế tối giản với chỉ 1 motor giúp tiết kiệm tài nguyên, nhẹ tải, dễ bảo trì, và có thể điều chỉnh góc bắn cũng như tốc độ bóng linh hoạt.",

            bambooCadBtn: "Xem Bản Vẽ CAD Onshape",
            bambooCodeBtn: "Xem Mã Nguồn GitHub",

            // Impact Figures (GreenAms + ARISE)
            figTag: "CON SỐ NÓI LÊN TẤT CẢ",
            figTitle1: "NHỮNG CON SỐ",
            figTitle2: "ẤN TƯỢNG",
            figDesc: "Dữ liệu thực tế chứng minh tầm vóc quốc tế và sức lan tỏa mạnh mẽ của robotics học sinh trường Ams:",
            fig1Val: "142.000+",
            fig1Label: "Lượt Tiếp Cận Truyền Thông",
            fig2Val: "60+",
            fig2Label: "Đội Tuyển Kết Nối Toàn Cầu",
            fig3Val: "5.000+",
            fig3Label: "Học Sinh Tiếp Cận Qua Sự Kiện & Trại Hè",
            fig4Val: "Á Quân Thế Giới",
            fig4Label: "World Championship Houston 2025",

            // Divisions
            divTag: "CƠ CẤU CHUYÊN MÔN",
            divTitle1: "CÁC PHÂN BAN",
            divTitle2: "HOẠT ĐỘNG",
            divSubtitle: "Bốn phân ban chuyên môn hoạt động nhịp nhàng, tạo nên sức mạnh tổng hợp của đội tuyển robotics.",

            divMechTitle: "Cơ Khí & Thiết Kế CAD",
            divMechDesc: "Dựng hình 3D SolidWorks & Onshape, phân tích ứng suất động học FEA, gia công CNC và in 3D sợi carbon PETG.",
            divProgTitle: "Lập Trình & Tự Hành AI",
            divProgDesc: "Phát triển FTC Java SDK, thuật toán điều phối chuyển động RoadRunner, Pure Pursuit và xử lý thị giác máy tính.",
            divElecTitle: "Điện Tử & Nguồn Năng Lượng",
            divElecDesc: "Tích hợp REV Control Hub, Expansion Hub, thiết kế sơ đồ dây bọc chuyên nghiệp chống nhiễu và cảm biến Laser ToF.",
            divOutTitle: "Truyền Thông & Đối Ngoại",
            divOutDesc: "Xây dựng Engineering Portfolio 15 trang chuẩn quốc tế, quản lý tài chính, gây quỹ tài trợ và tổ chức sự kiện STEM.",

            // Sponsorship Tiers
            sponsTag: "TIẾP LỬA TÀI NĂNG TRẺ",
            sponsTitle1: "GÓI ĐỒNG HÀNH &",
            sponsTitle2: "TÀI TRỢ",
            sponsSubtitle: "Chúng tôi chân thành tri ân các quý doanh nghiệp và cựu Amser đã tin tưởng, đồng hành cùng thế hệ trẻ chuyên Ams vươn ra biển lớn.",
            tierDiamondName: "Đối Tác Kim Cương (Diamond)",
            tierDiamondAmount: "$5,000+ / 50.000.000+ VNĐ",
            tierDiamondPerk1: "In logo kích thước lớn nhất trên Thân Robot & Banner Đấu Trường",
            tierDiamondPerk2: "Logo nổi bật trên Áo đấu chính thức & phông nền truyền thông",
            tierDiamondPerk3: "2 trang giới thiệu riêng trong Engineering Portfolio quốc tế",
            tierDiamondPerk4: "Khách mời danh dự phát biểu tại sự kiện ra mắt robot & workshop",

            tierGoldName: "Đối Tác Vàng (Gold)",
            tierGoldAmount: "$3,400+ / 25.000.000+ VNĐ",
            tierGoldPerk1: "In logo nổi bật trên ốp sườn robot thi đấu",
            tierGoldPerk2: "Logo trên áo đồng phục đội tuyển và website chính thức",
            tierGoldPerk3: "1 trang hồ sơ doanh nghiệp trong Engineering Portfolio",
            tierGoldPerk4: "Bài viết truyền thông độc quyền và cơ hội tuyển dụng tài năng",

            tierSilverName: "Đối Tác Bạc (Silver)",
            tierSilverAmount: "$1,700+ / 10.000.000+ VNĐ",
            tierSilverPerk1: "Đặt logo trên banner khu kỹ thuật (Pit Booth)",
            tierSilverPerk2: "Đặt logo trên chân trang web chính thức của đội",
            tierSilverPerk3: "Nửa trang giới thiệu trong hồ sơ dự thi của đội",

            tierBronzeName: "Đối Tác Đồng (Bronze)",
            tierBronzeAmount: "$400+ / 5.000.000+ VNĐ",
            tierBronzePerk1: "Vinh danh logo trên bảng nhà tài trợ website",
            tierBronzePerk2: "Lời tri ân trang trọng trong ấn phẩm của đội",

            sponsCtaBtn: "ĐỒNG HÀNH TÀI TRỢ NGAY",
            partnersHeading: "ĐỐI TÁC VÀ NHÀ TÀI TRỢ CHÍNH THỨC",
            partnersSubheading: "Được tin tưởng và tiếp sức bởi các tập đoàn công nghệ cùng tổ chức danh tiếng:",

            // Awards
            awardsTag: "BẢNG VÀNG DANH DỰ",
            awardsTitle1: "NHỮNG DẤU MỐC",
            awardsTitle2: "TỰ HÀO",
            awardsSubtitle: "Minh chứng cho những nỗ lực không ngừng nghỉ, trí tuệ và tinh thần cống hiến đưa tên tuổi Amser rạng danh quốc tế:",
            award1Year: "2024–2025",
            award1Title: "Liên Minh Á Quân Thế Giới & Vô Địch Bảng Edison",
            award1Desc: "Vô địch bảng đấu Edison và tiến vào trận chung kết liên minh thế giới tại Giải Vô địch Thế giới FIRST (Houston, Hoa Kỳ).",
            award2Year: "2024–2025",
            award2Title: "Đội Trưởng Liên Minh Vô Địch & Giải Thiết Kế Việt Nam",
            award2Desc: "Một trong hai đại diện duy nhất của Việt Nam giành vé tham dự Giải Vô địch Thế giới FIRST Tech Challenge tại Houston, Hoa Kỳ.",
            award3Year: "2023–2024",
            award3Title: "Đội Trưởng Liên Minh Vô Địch & Giải Sáng Tạo (Innovate Award)",
            award3Desc: "Xếp hạng nhất toàn quốc ở tất cả các chỉ số hiệu suất robot và đột phá thiết kế cơ cấu nạp mẫu vật.",
            award4Year: "2025–2026",
            award4Title: "Dự Án Robot Mở Bamboo Bot & 15+ Trại Hè STEM",
            award4Desc: "Phát triển thiết kế robot mã nguồn mở đầu tiên tại Việt Nam cho mùa giải FTC DECODE và tập huấn cho hơn 5.000 học sinh qua GART Expo & Wonderlab.",

            // FAQ
            faqTag: "GIẢI ĐÁP THẮC MẮC",
            faqTitle1: "CÂU HỎI",
            faqTitle2: "THƯỜNG GẶP",
            faqQ1: "Nhà tài trợ nhận được những quyền lợi gì khi đồng hành cùng đội tuyển?",
            faqA1: "Doanh nghiệp sẽ được quảng bá thương hiệu trực tiếp trên thân robot thi đấu, đồng phục của đội, banner đấu trường, các buổi livestream giải đấu quốc tế và trong ấn phẩm Engineering Portfolio 15 trang gửi tới ban giám khảo và các chuyên gia công nghệ toàn cầu.",
            faqQ2: "Giải đấu FIRST Tech Challenge (FTC) có ý nghĩa và quy mô như thế nào?",
            faqA2: "FIRST Tech Challenge là giải đấu robot uy tín bậc nhất thế giới dành cho học sinh THPT do nhà sáng chế Dean Kamen khởi xướng. Các đội thiết kế robot thi đấu đối kháng 2v2 trong đấu trường với 30 giây tự hành hoàn toàn bằng AI và 2 phút điều khiển tay khốc liệt.",
            faqQ3: "Mối quan hệ hợp tác giữa ARISE 39081 và GreenAms 24751 là gì?",
            faqA3: "ARISE 39081 và GreenAms 24751 là hai đội tuyển anh em cùng chung mái trường THPT Chuyên Hà Nội - Amsterdam và cùng tranh tài tại đấu trường FIRST Tech Challenge ('When I say Ams, you say Rise!' & 'When I say Green, you say Ams!'). Hai đội cùng chia sẻ xưởng chế tạo, nghiên cứu giải pháp mã nguồn mở như Bamboo Bot, đồng tổ chức các sự kiện STEM như GART Expo, Wonderlab, và cùng nhau khẳng định vị thế của Amser trên bản đồ robotics thế giới.",
            faqQ4: "Làm thế nào để học sinh trường Ams có thể tham gia đội tuyển?",
            faqA4: "Đội tuyển mở đợt tuyển quân hàng năm vào mỗi mùa thu dành cho tất cả học sinh trường Ams. Chúng tôi chào đón các bạn đam mê cơ khí, lập trình, điện tử cũng như truyền thông đối ngoại. Bạn không cần phải có kinh nghiệm từ trước—chỉ cần niềm đam mê và tinh thần kiên trì!",
            faqQ5: "Các đội hoặc đối tác khác có thể hợp tác cùng chúng tôi như thế nào?",
            faqA5: "Các đội và tổ chức có thể hợp tác thông qua cố vấn kỹ thuật, tổ chức hội thảo chung, các sự kiện STEM, tài trợ hoặc chia sẻ kiến thức mã nguồn mở (CAD, Code). Chúng tôi luôn hoan nghênh mọi mối quan hệ đối tác giúp củng cố cộng đồng robot Việt Nam và truyền cảm hứng cho thế hệ trẻ.",

            // Contact
            contactTag: "ĐỒNG HÀNH CÙNG CHÚNG TÔI",
            contactTitle1: "TÀI TRỢ &",
            contactTitle2: "KẾT NỐI",
            contactDesc: "Cùng các đội tuyển robotics trường Ams ươm mầm và bồi dưỡng những tài năng kỹ thuật trẻ tuổi của Việt Nam vươn ra thế giới.",
            contactNamePlaceholder: "Họ và tên / Doanh nghiệp",
            contactEmailPlaceholder: "Địa chỉ email của bạn",
            contactMsgPlaceholder: "Nội dung lời nhắn hoặc ý định tài trợ...",
            contactSendBtn: "GỬI THÔNG ĐIỆP",
            contactSuccess: "Cảm ơn bạn! Thông điệp của bạn đã được chuyển đến ban quản lý đội tuyển.",
            addressLabel: "Trụ sở hoạt động",
            addressVal: "Trường THPT Chuyên Hà Nội - Amsterdam, Số 1 Hoàng Minh Giám, Cầu Giấy, Hà Nội",
            leadershipLabel: "Ban Quản Lý & Huấn Luyện Viên",
            coachTitle: "Huấn luyện viên chính: Anh Nguyễn Hải Đăng",
            coachContact: "ngnhaidangvn@gmail.com • (+84) 968 228 118",
            managerTitle: "Quản lý đội tuyển: Thầy Nguyễn Thanh Tùng",
            managerContact: "tungnt@hnams.edu.vn • (+84) 968 666 245",
            ariseContactTitle: "Liên hệ ARISE 39081",
            ariseContactVal: "arise.ams39081@gmail.com"
        }
    };

    // -------------------------------------------------------------
    // 2. 2D COSMIC STARFIELD WITH CONSTELLATION LINKS
    // -------------------------------------------------------------
    const canvasEl = document.getElementById("starfield");
    const ctx2d = canvasEl ? canvasEl.getContext("2d") : null;
    const particleList = [];
    const TOTAL_PARTICLES = 160;
    const MAX_LINK_DISTANCE = 75;

    const updateCanvasSize = () => {
        if (!canvasEl) return;
        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;
    };

    const buildParticles = () => {
        particleList.length = 0;
        if (!canvasEl) return;
        for (let i = 0; i < TOTAL_PARTICLES; i++) {
            const primary = Math.random() > 0.35;
            particleList.push({
                x: Math.random() * canvasEl.width,
                y: Math.random() * canvasEl.height,
                r: Math.random() * 1.8 + 0.4,
                dx: (Math.random() - 0.5) * 0.45,
                dy: (Math.random() - 0.5) * 0.45,
                ang: Math.random() * Math.PI * 2,
                angVel: Math.random() * 0.02 + 0.005,
                amp: Math.random() * 0.35,
                opacity: Math.random() * 0.7 + 0.3,
                fadeStep: (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
                darkHex: primary ? "#ffffff" : "#8da4ff",
                lightHex: primary ? "#1e3a8a" : "#4f46e5"
            });
        }
    };

    const renderStarfield = () => {
        if (!ctx2d || !canvasEl) return;
        ctx2d.clearRect(0, 0, canvasEl.width, canvasEl.height);

        for (let i = 0; i < particleList.length; i++) {
            const p = particleList[i];
            p.ang += p.angVel;
            p.x += p.dx + Math.cos(p.ang) * p.amp;
            p.y += p.dy + Math.sin(p.ang) * p.amp;

            if (p.x < 0) p.x = canvasEl.width;
            if (p.x > canvasEl.width) p.x = 0;
            if (p.y < 0) p.y = canvasEl.height;
            if (p.y > canvasEl.height) p.y = 0;

            p.opacity += p.fadeStep;
            if (p.opacity >= 1 || p.opacity <= 0.2) {
                p.opacity = Math.max(0.2, Math.min(1, p.opacity));
                p.fadeStep *= -1;
            }

            const activeHex = isLightMode ? p.lightHex : p.darkHex;

            ctx2d.save();
            ctx2d.beginPath();
            ctx2d.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx2d.fillStyle = activeHex;
            ctx2d.globalAlpha = p.opacity;
            ctx2d.shadowBlur = p.r * 5;
            ctx2d.shadowColor = activeHex;
            ctx2d.fill();
            ctx2d.restore();

            // Link stars into constellations
            for (let j = i + 1; j < particleList.length; j++) {
                const p2 = particleList[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < MAX_LINK_DISTANCE) {
                    const alpha = (1 - dist / MAX_LINK_DISTANCE) * 0.14 * (p.opacity + p2.opacity) / 2;
                    ctx2d.save();
                    ctx2d.beginPath();
                    ctx2d.moveTo(p.x, p.y);
                    ctx2d.lineTo(p2.x, p2.y);
                    ctx2d.strokeStyle = isLightMode ? "rgba(59, 91, 219," + alpha + ")" : "rgba(141, 164, 255," + alpha + ")";
                    ctx2d.lineWidth = 0.8;
                    ctx2d.stroke();
                    ctx2d.restore();
                }
            }
        }

        requestAnimationFrame(renderStarfield);
    };

    updateCanvasSize();
    buildParticles();
    renderStarfield();
    window.addEventListener("resize", updateCanvasSize);

    // -------------------------------------------------------------
    // 3. THREE.JS CYBER PHOENIX WITH VIEWPORT HUD CONTROLS
    // -------------------------------------------------------------
    const mountNode = document.getElementById("robot-canvas-container");
    if (mountNode) {
        const scene3d = new THREE.Scene();
        const cam = new THREE.PerspectiveCamera(45, mountNode.clientWidth / mountNode.clientHeight, 0.1, 1000);
        cam.position.set(10, 7, 14);

        const webgl = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
        webgl.setSize(mountNode.clientWidth, mountNode.clientHeight);
        webgl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountNode.appendChild(webgl.domElement);

        const orbit = new THREE.OrbitControls(cam, webgl.domElement);
        orbit.enableDamping = true;
        orbit.dampingFactor = 0.05;
        orbit.maxDistance = 35;
        orbit.minDistance = 5;

        // Lights
        const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
        const mainLight = new THREE.DirectionalLight(0x8da4ff, 2.5);
        mainLight.position.set(8, 12, 10);
        const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.8);
        rimLight.position.set(-10, -6, -8);
        scene3d.add(ambLight, mainLight, rimLight);

        const craneRoot = new THREE.Group();
        scene3d.add(craneRoot);

        // Raw 3D Origami Coordinates
        const rawCoords = new Float32Array([
             5.0,  3.0,  0.0,   3.5,  4.5,  0.0,   3.0,  2.5,  0.0,
             1.0, -1.0,  0.0,  -2.0, -1.0,  0.0,  -5.0,  3.0,  0.0,
             0.0,  1.5,  0.0,   1.0,  1.0,  1.0,  -1.5,  1.0,  1.0,
            -2.0,  5.0,  5.0,   0.0,  0.5,  2.0,   1.0,  1.0, -1.0,
            -1.5,  1.0, -1.0,  -2.0,  5.0, -5.0,   0.0,  0.5, -2.0
        ]);

        const triIndices = [
            0, 1, 2,  2, 1, 7,  2, 11, 1,  2, 7, 3,  2, 3, 11,
            7, 1, 6,  11, 6, 1,
            7, 3, 10,  11, 14, 3,  10, 3, 4,  14, 4, 3,  8, 10, 4,  12, 4, 14,
            7, 6, 10,  11, 14, 6,  10, 6, 8,  14, 12, 6,
            8, 6, 5,  12, 5, 6,  8, 5, 4,  12, 4, 5,
            7, 10, 9,  10, 8, 9,  8, 6, 9,  7, 9, 6,
            11, 13, 14,  14, 13, 12,  12, 13, 6,  11, 6, 13
        ];

        const baseGeo = new THREE.BufferGeometry();
        baseGeo.setAttribute("position", new THREE.BufferAttribute(rawCoords, 3));
        baseGeo.setIndex(triIndices);

        const meshGeo = baseGeo.toNonIndexed();
        const finalVerts = meshGeo.attributes.position.array.slice();
        const liveVerts = finalVerts.slice();
        meshGeo.setAttribute("position", new THREE.BufferAttribute(liveVerts, 3));
        meshGeo.computeVertexNormals();

        const bodyMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x8da4ff,
            emissive: 0x141f38,
            roughness: 0.15,
            metalness: 0.65,
            transmission: 0.45,
            ior: 1.5,
            transparent: true,
            opacity: 0.95,
            side: THREE.DoubleSide
        });
        const solidCrane = new THREE.Mesh(meshGeo, bodyMaterial);
        craneRoot.add(solidCrane);

        const edgeGeo = new THREE.EdgesGeometry(baseGeo);
        const edgeMaterial = new THREE.LineBasicMaterial({
            color: 0x8da4ff,
            transparent: true,
            opacity: 0.85,
            linewidth: 2
        });
        const darkWireCrane = new THREE.LineSegments(edgeGeo, edgeMaterial);
        craneRoot.add(darkWireCrane);

        const coreMesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.85, 1),
            new THREE.MeshStandardMaterial({
                color: 0x8da4ff,
                emissive: 0x8da4ff,
                emissiveIntensity: 2.2,
                wireframe: true
            })
        );
        const coreLight = new THREE.PointLight(0x8da4ff, 2.5, 12);
        coreMesh.add(coreLight);
        coreMesh.position.set(0, 0.8, 0);
        craneRoot.add(coreMesh);

        const timer = new THREE.Clock();

        const renderScene3D = () => {
            requestAnimationFrame(renderScene3D);
            const elapsed = timer.getElapsedTime();
            orbit.update();

            // Wing morphing
            const flap = Math.sin(elapsed * 2.8 * wingFlapSpeed);
            const posAttr = meshGeo.attributes.position;
            const arr = posAttr.array;

            for (let i = 0; i < finalVerts.length; i += 3) {
                const origX = finalVerts[i];
                const origY = finalVerts[i + 1];
                const origZ = finalVerts[i + 2];

                if (Math.abs(origZ) > 1.2) {
                    const wingDist = Math.abs(origZ) / 5.0;
                    arr[i] = origX;
                    arr[i + 1] = origY + flap * wingDist * 1.6;
                    arr[i + 2] = origZ + Math.cos(elapsed * 2.8 * wingFlapSpeed) * wingDist * 0.3;
                } else {
                    arr[i] = origX;
                    arr[i + 1] = origY;
                    arr[i + 2] = origZ;
                }
            }
            posAttr.needsUpdate = true;
            meshGeo.computeVertexNormals();

            // Core pulsation
            const coreScale = 1.0 + Math.sin(elapsed * 3.5) * 0.16;
            coreMesh.scale.setScalar(coreScale);

            craneRoot.rotation.y = elapsed * 0.22;

            if (isLightMode) {
                bodyMaterial.color.setHex(0x3b5bdb);
                bodyMaterial.emissive.setHex(0x1e293b);
                edgeMaterial.color.setHex(0x3b5bdb);
                coreLight.color.setHex(0x3b5bdb);
            } else {
                bodyMaterial.color.setHex(0x8da4ff);
                bodyMaterial.emissive.setHex(0x141f38);
                edgeMaterial.color.setHex(0x8da4ff);
                coreLight.color.setHex(0x8da4ff);
            }

            webgl.render(scene3d, cam);
        };
        renderScene3D();

        window.addEventListener("resize", () => {
            if (!mountNode) return;
            cam.aspect = mountNode.clientWidth / mountNode.clientHeight;
            cam.updateProjectionMatrix();
            webgl.setSize(mountNode.clientWidth, mountNode.clientHeight);
        });

        window.setCameraView = (type) => {
            const duration = 800;
            let targetPos = { x: 10, y: 7, z: 14 };

            if (type === "iso") targetPos = { x: 10, y: 7, z: 14 };
            if (type === "front") targetPos = { x: 16, y: 1.5, z: 0 };
            if (type === "top") targetPos = { x: 0.1, y: 18, z: 0.1 };
            if (type === "wing") targetPos = { x: 1, y: 8, z: 12 };

            const startPos = { x: cam.position.x, y: cam.position.y, z: cam.position.z };
            const startTime = performance.now();

            const stepCam = (now) => {
                const progress = Math.min(1, (now - startTime) / duration);
                const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
                cam.position.x = startPos.x + (targetPos.x - startPos.x) * ease;
                cam.position.y = startPos.y + (targetPos.y - startPos.y) * ease;
                cam.position.z = startPos.z + (targetPos.z - startPos.z) * ease;
                if (progress < 1) requestAnimationFrame(stepCam);
            };
            requestAnimationFrame(stepCam);
        };

        window.toggleWireframeMode = () => {
            isWireframeMode = !isWireframeMode;
            bodyMaterial.wireframe = isWireframeMode;
            const btn = document.getElementById("hudWireframeBtn");
            if (btn) btn.classList.toggle("active", isWireframeMode);
        };
    }

    // -------------------------------------------------------------
    // 4. DUAL ROBOT SUBSYSTEMS EXPLORER (ARISE & BAMBOO BOT)
    // -------------------------------------------------------------
    const subTitleEl = document.getElementById("subsystemDetailTitle");
    const subSpecsEl = document.getElementById("subsystemDetailSpecs");
    const subPillsContainer = document.getElementById("subsystemPillsContainer");
    const ariseSelectorBtn = document.getElementById("selectRobotArise");
    const bambooSelectorBtn = document.getElementById("selectRobotBamboo");
    const bambooLinksBox = document.getElementById("bambooExternalLinks");

    const ariseTabs = [
        { key: "drivetrain", i18nKey: "subDrivetrainBtn", titleKey: "subDrivetrainTitle", specsKey: "subDrivetrainSpecs" },
        { key: "odometry", i18nKey: "subOdometryBtn", titleKey: "subOdometryTitle", specsKey: "subOdometrySpecs" },
        { key: "intake", i18nKey: "subIntakeBtn", titleKey: "subIntakeTitle", specsKey: "subIntakeSpecs" },
        { key: "lift", i18nKey: "subLiftBtn", titleKey: "subLiftTitle", specsKey: "subLiftSpecs" },
        { key: "vision", i18nKey: "subVisionBtn", titleKey: "subVisionTitle", specsKey: "subVisionSpecs" }
    ];

    const bambooTabs = [
        { key: "bamboo_drivetrain", i18nKey: "bambooDrivetrainBtn", titleKey: "bambooDrivetrainTitle", specsKey: "bambooDrivetrainSpecs" },
        { key: "bamboo_intake", i18nKey: "bambooIntakeBtn", titleKey: "bambooIntakeTitle", specsKey: "bambooIntakeSpecs" },
        { key: "bamboo_transfer", i18nKey: "bambooTransferBtn", titleKey: "bambooTransferTitle", specsKey: "bambooTransferSpecs" },
        { key: "bamboo_feed", i18nKey: "bambooFeedBtn", titleKey: "bambooFeedTitle", specsKey: "bambooFeedSpecs" },
        { key: "bamboo_shooter", i18nKey: "bambooShooterBtn", titleKey: "bambooShooterTitle", specsKey: "bambooShooterSpecs" }
    ];

    const renderSubsystemPills = () => {
        if (!subPillsContainer) return;
        const tabs = activeRobotMode === "arise" ? ariseTabs : bambooTabs;
        const langData = translations[currentLang];

        subPillsContainer.innerHTML = "";
        tabs.forEach((tab, idx) => {
            const btn = document.createElement("button");
            btn.className = `subsystem-tab-btn ${idx === 0 ? "active" : ""}`;
            btn.dataset.sys = tab.key;
            btn.textContent = langData[tab.i18nKey] || tab.key;
            btn.addEventListener("click", () => {
                document.querySelectorAll(".subsystem-tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                if (subTitleEl && subSpecsEl) {
                    subTitleEl.textContent = langData[tab.titleKey];
                    subSpecsEl.textContent = langData[tab.specsKey];
                }
            });
            subPillsContainer.appendChild(btn);
        });

        // Set initial subsystem text
        if (tabs.length > 0 && subTitleEl && subSpecsEl) {
            subTitleEl.textContent = langData[tabs[0].titleKey];
            subSpecsEl.textContent = langData[tabs[0].specsKey];
        }

        // Show/hide Bamboo CAD & GitHub links box
        if (bambooLinksBox) {
            bambooLinksBox.style.display = activeRobotMode === "bamboo" ? "flex" : "none";
        }
    };

    if (ariseSelectorBtn && bambooSelectorBtn) {
        ariseSelectorBtn.addEventListener("click", () => {
            activeRobotMode = "arise";
            ariseSelectorBtn.classList.add("active");
            bambooSelectorBtn.classList.remove("active");
            renderSubsystemPills();
        });

        bambooSelectorBtn.addEventListener("click", () => {
            activeRobotMode = "bamboo";
            bambooSelectorBtn.classList.add("active");
            ariseSelectorBtn.classList.remove("active");
            renderSubsystemPills();
        });
    }

    renderSubsystemPills();

    // -------------------------------------------------------------
    // 5. FAQ ACCORDION ENGINE
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const header = item.querySelector(".faq-header");
        if (header) {
            header.addEventListener("click", () => {
                const isOpen = item.classList.contains("open");
                faqItems.forEach(i => i.classList.remove("open"));
                if (!isOpen) item.classList.add("open");
            });
        }
    });

    // -------------------------------------------------------------
    // 6. THEME & BILINGUAL ENGINE
    // -------------------------------------------------------------
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            isLightMode = !isLightMode;
            document.body.classList.toggle("light-mode", isLightMode);
        });
    }

    const langToggleBtn = document.getElementById("lang-toggle");
    const langDropdown = document.getElementById("lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    if (langToggleBtn && langDropdown) {
        langToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = langDropdown.classList.toggle("open");
            langToggleBtn.setAttribute("aria-expanded", String(isOpen));
        });

        document.addEventListener("click", () => {
            langDropdown.classList.remove("open");
            langToggleBtn.setAttribute("aria-expanded", "false");
        });
    }

    langOptions.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const lang = btn.dataset.lang;
            if (lang && translations[lang]) {
                currentLang = lang;
                updateLanguage(lang);
                langOptions.forEach(o => o.classList.toggle("active", o.dataset.lang === lang));
                if (langDropdown) langDropdown.classList.remove("open");
                if (langToggleBtn) langToggleBtn.setAttribute("aria-expanded", "false");
            }
        });
    });

    const updateLanguage = (lang) => {
        const data = translations[lang];
        if (!data) return;

        const switchables = document.querySelectorAll("[data-i18n]");
        switchables.forEach(el => el.classList.add("lang-switching"));

        setTimeout(() => {
            switchables.forEach(el => {
                const key = el.dataset.i18n;
                if (data[key]) {
                    el.innerHTML = data[key];
                }
                el.classList.remove("lang-switching");
            });

            // Re-render subsystem pills with translated text
            renderSubsystemPills();

            const nameInput = document.getElementById("contactName");
            const emailInput = document.getElementById("contactEmail");
            const msgInput = document.getElementById("contactMsg");
            if (nameInput) nameInput.placeholder = data.contactNamePlaceholder;
            if (emailInput) emailInput.placeholder = data.contactEmailPlaceholder;
            if (msgInput) msgInput.placeholder = data.contactMsgPlaceholder;

            const langLabel = document.getElementById("lang-label");
            if (langLabel) langLabel.textContent = data.langName;
        }, 200);
    };

    // -------------------------------------------------------------
    // 7. CONTACT FORM SIMULATION & SPONSOR PRE-FILL
    // -------------------------------------------------------------
    const contactForm = document.getElementById("contactForm");
    const contactSuccess = document.getElementById("contactSuccessMsg");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector("button[type='submit']");
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> TRANSMITTING...`;
                setTimeout(() => {
                    contactForm.reset();
                    if (contactSuccess) {
                        contactSuccess.classList.remove("hidden");
                        setTimeout(() => contactSuccess.classList.add("hidden"), 5000);
                    }
                    btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span data-i18n="contactSendBtn">${translations[currentLang].contactSendBtn}</span>`;
                }, 1000);
            }
        });
    }

    window.prefillSponsorship = (tierName) => {
        const contactSection = document.getElementById("contact-section");
        const msgInput = document.getElementById("contactMsg");
        if (msgInput) {
            msgInput.value = `We are interested in partnering with Hanoi - Amsterdam Robotics under the [${tierName}] package. Please send us your official sponsorship prospectus and agreement details.`;
        }
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
});
