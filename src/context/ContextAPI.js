import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../Utils/api";
export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [Content, setContent] = useState([
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/fZ03PN35gyheBihnhTFjm55NN9XkbIzMuiLu8kGvIuWbhh7pZxK6XxmioXmX-4G75sHzPffT-g=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@NahomRecordsIncMusic",
          channelId: "UCeBWIR6qAv2itoiDWO4FHow",
          title: "Nahom Records Inc",
        },
        badges: ["4K"],
        descriptionSnippet:
          "Eden Aysheshm - Fera Teba - ኤደን አይሸሽም - ፈራ ተባ - New Ethiopian Music 2023 (Official Video) #Ethiopianmusic ...",
        isLiveNow: false,
        lengthSeconds: 295,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/mnT18gWDpqI/mqdefault_6s.webp?du=3000&sqp=CJbsqKoG&rs=AOn4CLAS_PVBg6EJDwLeOr6r_vTHGs5I2g",
            width: 320,
          },
        ],
        publishedTimeText: "2 months ago",
        stats: { views: 1537208 },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/mnT18gWDpqI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDS4TD7xQ14BJYCPcaVfVqEeBegxg",
            width: 480,
          },
        ],
        title:
          "Eden Aysheshem - Fera Teba - ኤደን አይሸሽም - ፈራ ተባ - New Ethiopian Music 2023 (Official Video)",
        videoId: "mnT18gWDpqI",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKaeMyz30bRK9nTCRSpjEahzUfQTtH4QBdE6MCGTiA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@QuantumTech",
          channelId: "UC4Tklxku1yPcRIH0VVCKoeA",
          title: "Quantum Tech HD",
        },
        badges: [],
        descriptionSnippet:
          "Prepare to be wowed by the boundless creativity of inventors who are constantly dreaming up ingenious solutions to everyday ...",
        isLiveNow: false,
        lengthSeconds: 556,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/FxWNws3X0qM/mqdefault_6s.webp?du=3000&sqp=CLWfqaoG&rs=AOn4CLA_H5oyVJJv03xVTdDsQk0XJBsojg",
            width: 320,
          },
        ],
        publishedTimeText: "8 months ago",
        stats: { views: 3515129 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/FxWNws3X0qM/hq720_custom_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDe4ZJ7UmLuRVuowe7HNowe34SCIQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/FxWNws3X0qM/hq720_custom_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCJW778wHe-Ll0dgmVUny1n8mjZEA",
            width: 720,
          },
        ],
        title: "New Inventions That Are At Another Level ▶42",
        videoId: "FxWNws3X0qM",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@ABCNews",
          channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
          title: "ABC News",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "Aaron Katersky has details on former Pres. Donald Trump's testimony in the $250 million New York civil fraud case against him; ...",
        isLiveNow: false,
        lengthSeconds: 1229,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/WLd8_Q02oFc/mqdefault_6s.webp?du=3000&sqp=CJuVqaoG&rs=AOn4CLDlb9HS4oKHwoKC_tvCo40F9p7uiA",
            width: 320,
          },
        ],
        publishedTimeText: "11 hours ago",
        stats: { views: 203719 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/WLd8_Q02oFc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZomSFmD2I3mIZHKZy-VQ-MLbWpw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/WLd8_Q02oFc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWDlrftQ_xGSLFkikKRgHp0Rxcog",
            width: 720,
          },
        ],
        title:
          "ABC World News Tonight with David Muir Full Broadcast - Nov. 6, 2023",
        videoId: "WLd8_Q02oFc",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKajJtvfD8vTVW4SYzWujER2rbxaiRydu3NoxdGncw=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@NichLmao",
          channelId: "UC6VAIqNQBc7ggiqvsOHOBqw",
          title: "NichLmao",
        },
        badges: ["New"],
        descriptionSnippet: null,
        isLiveNow: false,
        lengthSeconds: 54,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/HGSeuMS-fR8/mqdefault_6s.webp?du=3000&sqp=CN2IqaoG&rs=AOn4CLBTKExgD3lhfR2lH5tbVSIrPjzgJg",
            width: 320,
          },
        ],
        publishedTimeText: "6 hours ago",
        stats: { views: 117876 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/HGSeuMS-fR8/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARh_IE0oHDAP&rs=AOn4CLBTxTkzpUY_YIy-AEjExoOBCnFnTA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/HGSeuMS-fR8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARh_IE0oHDAP&rs=AOn4CLAuw7z_12hziU2bn_WS40ZpKLCyEg",
            width: 720,
          },
        ],
        title: "SHE TRICKED ME?! (New Riddle...)",
        videoId: "HGSeuMS-fR8",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/vfgTwN2vtrIFe7jfON70eXNw9BH0LLujtyXs6Oc8OvvISFb9i-Bn4Bxxzkos_BwCxHjdytYa5g=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TheDailyShow",
          channelId: "UCwWhs_6x42TyRM4Wstoq8HA",
          title: "The Daily Show",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "Sarah Silverman reports on Donald Trump finally taking the stand in court, a woman looking to crash her car into a Jewish school ...",
        isLiveNow: false,
        lengthSeconds: 609,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/UsKHean0ChI/mqdefault_6s.webp?du=3000&sqp=CP6KqaoG&rs=AOn4CLB6vAA0U1V_8jMifmkN5broAea2uA",
            width: 320,
          },
        ],
        publishedTimeText: "13 hours ago",
        stats: { views: 391966 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/UsKHean0ChI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_FCqyjukkz0LoOo8zjZ_drq9QFg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/UsKHean0ChI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-eKgD00KIf5GQzUH9q1k-MeOQ1Q",
            width: 720,
          },
        ],
        title:
          "Trump's Testimony Goes Off the Rails & Mike Johnson's Anti-Porn App | The Daily Show",
        videoId: "UsKHean0ChI",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/kDUg480xOHHjIEnvADRDAz8w9MapJEx-3UJjJQzfeg4O-SrAGHTOSpd5Tm5QtJi0RlSfafMxQg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@NFL",
          channelId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
          title: "NFL",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "Check out our other channels: NFL Mundo https://www.youtube.com/mundonfl NFL Brasil ...",
        isLiveNow: false,
        lengthSeconds: 646,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/vNFgoNFbAOE/mqdefault_6s.webp?du=3000&sqp=CMWkqaoG&rs=AOn4CLDX6M-hGDlKXR8h6Y_jbbYF2YlPqg",
            width: 320,
          },
        ],
        publishedTimeText: "1 day ago",
        stats: { views: 152698 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/vNFgoNFbAOE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5diPZthNcVzFPu0Dob4HbDPZ9Tw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/vNFgoNFbAOE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCG49nq3zz7YHQA5iLvmF0U5OnPpg",
            width: 720,
          },
        ],
        title: "Top Plays from Week 9 | NFL 2023 Highlights",
        videoId: "vNFgoNFbAOE",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKbMdQDW2bTb_kT_nLJTR5a6JZ-Dk1AzObvzO4et-A=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@Dave2D",
          channelId: "UCVYamHliCI9rw1tHR1xbkfw",
          title: "Dave2D",
        },
        badges: ["New", "4K"],
        descriptionSnippet:
          "If you'd like to support the channel, consider a Dave2D membership by clicking the “Join” button above! http://twitter.com/Dave2D ...",
        isLiveNow: false,
        lengthSeconds: 630,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/tCGZ6pkbD5E/mqdefault_6s.webp?du=3000&sqp=CLmFqaoG&rs=AOn4CLB0EavJPefKn9lb3s1znTZ2mHnhJA",
            width: 320,
          },
        ],
        publishedTimeText: "2 days ago",
        stats: { views: 944072 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/tCGZ6pkbD5E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKr02gnPkYIXh30B_frxUWbHiniQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/tCGZ6pkbD5E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsBt_hGzuvk-p6nuhAPnWdKpdclQ",
            width: 720,
          },
        ],
        title: 'NEW Sony PS5 "Slim" - Teardown + Thoughts',
        videoId: "tCGZ6pkbD5E",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/agAeAQiq5GwMF3ALWlTLAikpl3Tho6BH1LY58Z6Y58iJeG6KZfCe0B96TT_frCeQIT1JZdpuYw=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@LetsBeHonestWithKC",
          channelId: "UCSJqT36l3imYtr_QF6LFNXA",
          title: "Let's Be Honest with Kristin Cavallari",
        },
        badges: [],
        descriptionSnippet:
          "Two-time Super Bowl champion, Travis Kelce, joins me from Kansas City for a conversation that covers everything.",
        isLiveNow: false,
        lengthSeconds: 2379,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/OLhpzUAyY-8/mqdefault_6s.webp?du=3000&sqp=COydqaoG&rs=AOn4CLAsPInNfR_jG3-fveXy3LWCWOpOlg",
            width: 320,
          },
        ],
        publishedTimeText: "1 month ago",
        stats: { views: 232920 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/OLhpzUAyY-8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTK77-Sm6k7NRUdJBV2nGzPdTtcQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/OLhpzUAyY-8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRBzYCuYMU_unFlKcrCpRWe3bf5w",
            width: 720,
          },
        ],
        title:
          "Getting Into The Mind of a Man with Travis Kelce | Let's Be Honest with Kristin Cavallari",
        videoId: "OLhpzUAyY-8",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKZqtKBLWGAFPsVF7Vt8TkOboOSHdvYWeMJXx1LJ1Q=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@briantylercohen",
          channelId: "UCQANb2YPwAtK-IQJrLaaUFw",
          title: "Brian Tyler Cohen",
        },
        badges: ["4K"],
        descriptionSnippet:
          "Here's what you MUST know about Mike Johnson, the new Republican Speaker To demand that Donald Trump's FEDERAL trial ...",
        isLiveNow: false,
        lengthSeconds: 515,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/LOTZgugbHAo/mqdefault_6s.webp?du=3000&sqp=CNyjqaoG&rs=AOn4CLCNs4dqMlDC5xsS9Y-k3c9TxX18KQ",
            width: 320,
          },
        ],
        publishedTimeText: "12 days ago",
        stats: { views: 989671 },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/LOTZgugbHAo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRPkvGLAxuEUNlMrOi5tq2kvS8qA",
            width: 480,
          },
        ],
        title:
          "🚨 New Republican Speaker's HORRIFIC statements suddenly SURGE into spotlight",
        videoId: "LOTZgugbHAo",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/as3gR577PGuNbppNc_O6RJHP4mMk6tGjjrKtkVfZMwzbvN8Rz0EyhVYEjTRYV8EA51-4qggkkQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@RealTime",
          channelId: "UCy6kyFxaMqGtpE3pQTflK8A",
          title: "Real Time with Bill Maher",
        },
        badges: ["CC"],
        descriptionSnippet:
          "Jessica Tarlov and Scott Galloway join Bill to discuss the threat posed to democracy by the GOP's embrace of Christian ...",
        isLiveNow: false,
        lengthSeconds: 424,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/FQc8iGjp_Fg/mqdefault_6s.webp?du=3000&sqp=CLD5qKoG&rs=AOn4CLBvnZxHc5rOJ9ZP2C96jlAfMav5AQ",
            width: 320,
          },
        ],
        publishedTimeText: "10 days ago",
        stats: { views: 628266 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/FQc8iGjp_Fg/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIDooWDAP&rs=AOn4CLD3ekXN6eyfRoZekRrvhudUmWGutA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/FQc8iGjp_Fg/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIDooWDAP&rs=AOn4CLBfknm160wchRRxu01SWLM8k7VzsA",
            width: 720,
          },
        ],
        title: "The MAGA Party | Real Time with Bill Maher (HBO)",
        videoId: "FQc8iGjp_Fg",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKbTYm-RUBcq7UiswcuBilGCIJJ2js6lkzy8xK8ajdw=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@JimmyKimmelLive",
          channelId: "UCa6vGFO9ty8v5KZJXQxdhaw",
          title: "Jimmy Kimmel Live",
        },
        badges: [],
        descriptionSnippet:
          "Los Angeles has been named the second most rat-infested city in America, our least lovable Senator Ted Cruz continues to ...",
        isLiveNow: false,
        lengthSeconds: 602,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/FeFw0dypaUU/mqdefault_6s.webp?du=3000&sqp=CO2CqaoG&rs=AOn4CLC5HJErgj7E-VdriNekofyv1gEPEw",
            width: 320,
          },
        ],
        publishedTimeText: "13 days ago",
        stats: { views: 1970188 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/FeFw0dypaUU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUdO1e2-RSyuD1ZBUSNKq8wpV0kw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/FeFw0dypaUU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6_qp067SEN_sjNYq6NSANeU6doQ",
            width: 720,
          },
        ],
        title:
          "Trump is Definitely Going to Jail, House of Representatives Unravels & the Ted Cruz Curse",
        videoId: "FeFw0dypaUU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKYDR7ndFuV9Zn3_drUMZ0C_6lY0YyTldcjRfUB0bQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@CBSNews",
          channelId: "UC8p1vwvWtl6T73JiExfWs1g",
          title: "CBS News",
        },
        badges: ["New"],
        descriptionSnippet:
          "Former president Donald Trump is testifying Monday in a New York civil fraud trial that stems from a lawsuit filed by New York ...",
        isLiveNow: false,
        lengthSeconds: 754,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/tsYSAaipd7c/mqdefault_6s.webp?du=3000&sqp=CO2kqaoG&rs=AOn4CLD3B4PeseCbaN8-AgxRwZyitP60YA",
            width: 320,
          },
        ],
        publishedTimeText: "22 hours ago",
        stats: { views: 85626 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/tsYSAaipd7c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBXTEUE5HpgY7aRBes338kbSZHog",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/tsYSAaipd7c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdsen5pf7KHw0sZ3hqgqpIqKilRQ",
            width: 720,
          },
        ],
        title:
          "Trump testifying in New York civil fraud trial after his sons took the stand — what to know",
        videoId: "tsYSAaipd7c",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@NBCNews",
          channelId: "UCeY0bbntWzzVIaj2z3QigXg",
          title: "NBC News",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          'Elon Musk has rolled out a new A.I. chatbot to specific users on X, the platform formerly known as Twitter. Musk says "Grok" will ...',
        isLiveNow: false,
        lengthSeconds: 243,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/lAZljDXhgLo/mqdefault_6s.webp?du=3000&sqp=CMyIqaoG&rs=AOn4CLAA1HLLVH3dJvj-pziYwgbDGmWpSg",
            width: 320,
          },
        ],
        publishedTimeText: "7 hours ago",
        stats: { views: 2870 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/lAZljDXhgLo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-A8nmoL3q67KqVkKERncpjqFjzg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/lAZljDXhgLo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBB7kLxU92FMd-mMWHTFLyQi1d__A",
            width: 720,
          },
        ],
        title: "Elon Musk launches new A.I. chatbot 'Grok'",
        videoId: "lAZljDXhgLo",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@NBCNews",
          channelId: "UCeY0bbntWzzVIaj2z3QigXg",
          title: "NBC News",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "On Wednesday, Donald Trump Jr., the son of the former president, took the stand to answer questions about Trump organization ...",
        isLiveNow: false,
        lengthSeconds: 224,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/5Ysp8hfCGUY/mqdefault_6s.webp?du=3000&sqp=CNT8qKoG&rs=AOn4CLC1EUGyXTOWKySNwLWdAIoPZhoeTA",
            width: 320,
          },
        ],
        publishedTimeText: "5 days ago",
        stats: { views: 65045 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/5Ysp8hfCGUY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALsNd8WoV6kUbdCfIdgeqFgGQuuQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/5Ysp8hfCGUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAJ9xF5tbNQiBFL0hFM9ZPWcjDOA",
            width: 720,
          },
        ],
        title: "Donald Trump Jr. testifies in New York civil fraud trial",
        videoId: "5Ysp8hfCGUY",
      },
    },

    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/kDUg480xOHHjIEnvADRDAz8w9MapJEx-3UJjJQzfeg4O-SrAGHTOSpd5Tm5QtJi0RlSfafMxQg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@NFL",
          channelId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
          title: "NFL",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "Watch live local and primetime games, NFL RedZone, and NFL Network on Plus.NFL.com Check out our other channels: NFL ...",
        isLiveNow: false,
        lengthSeconds: 679,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/huLxtlt6I8E/mqdefault_6s.webp?du=3000&sqp=CKr8qKoG&rs=AOn4CLCq-fb19mcg6MQTu7g_Fpoi2WfBfQ",
            width: 320,
          },
        ],
        publishedTimeText: "10 hours ago",
        stats: { views: 561600 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/huLxtlt6I8E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4N1sDgSlfcWSR0LlLGTU_isdE-Q",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/huLxtlt6I8E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD56Ep05ebUbSicv0yG7K_MpZ-CQg",
            width: 720,
          },
        ],
        title:
          "Los Angeles Chargers vs. New York Jets | 2023 Week 9 Game Highlights",
        videoId: "huLxtlt6I8E",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/oVsmC16JTq_xX1NV6NpRk2iqgEYBltxImgJ3m3yM8tl4QjRaZZzoMfUVimPC8fHrvnM2U7NOnQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@DimpleMalhanVlogs",
          channelId: "UCHDQOZjxuSm0-LgLQtMeCqw",
          title: "Dimple Malhan Vlogs",
        },
        badges: ["New"],
        descriptionSnippet: null,
        isLiveNow: false,
        lengthSeconds: 826,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/q_9OPh2iPcE/mqdefault_6s.webp?du=3000&sqp=CIyhqaoG&rs=AOn4CLA09hyuj7JdC8eGXBxJIA5e0Wfzxw",
            width: 320,
          },
        ],
        publishedTimeText: "6 hours ago",
        stats: { views: 653992 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/q_9OPh2iPcE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsAAbjEqrXcQDqo5M8AdC2fWyUXg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/q_9OPh2iPcE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCug9Ml9oMWR6MgtQKTtYH1A7pzJg",
            width: 720,
          },
        ],
        title: "Nischay ka new song aa raha hai ??",
        videoId: "q_9OPh2iPcE",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKbNfVq_oNXHCDVCjGX5QmKKo2d7HaD8J9y09FCAKA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@MatthewLovesBall",
          channelId: "UC4GNCKohtEHRccrxKQiDJNg",
          title: "Matthew Loves Ball",
        },
        badges: ["New"],
        descriptionSnippet:
          "New Mexico State vs #16 Kentucky Basketball Game Highlights 11 6 2023 I do not intend to claim the copyright of any game video ...",
        isLiveNow: false,
        lengthSeconds: 1235,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/SurHNuA4B5o/mqdefault_6s.webp?du=3000&sqp=CN6OqaoG&rs=AOn4CLBIWkosDzK-zSxlpLnUXtfeqFnNKA",
            width: 320,
          },
        ],
        publishedTimeText: "12 hours ago",
        stats: { views: 30896 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/SurHNuA4B5o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmvZHEouDres-djKfq63QY0U9zYQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/SurHNuA4B5o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyOYVyzV9uWUd-SoVKNlvMiTHhiQ",
            width: 720,
          },
        ],
        title:
          "New Mexico State vs #16 Kentucky Basketball Game Highlights 11 6 2023",
        videoId: "SurHNuA4B5o",
      },
    },

    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ZWnHiQCOW9fFb-5dF2V6TwUaaialWWfkCEJ2wiASz4_5Az-PuzglvGaphrV-X3e0URfVujr0yw=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@ellarecords",
          channelId: "UCzDBbkHGIyn3He74px7Uwig",
          title: "ELLA RECORDS",
        },
        badges: ["New", "4K"],
        descriptionSnippet:
          "New Ethiopian Music 2023 | Ethiopian Music 2023 | Oromo Music Ethiopian Oromo Music 2023 Produced by ela tv - Yosan ...",
        isLiveNow: false,
        lengthSeconds: 316,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/ShPMgvYBD0o/mqdefault_6s.webp?du=3000&sqp=CLT0qKoG&rs=AOn4CLAeqydvXeV3Lar_G6QWf-8MiBzX1g",
            width: 320,
          },
        ],
        publishedTimeText: "3 days ago",
        stats: { views: 835138 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/ShPMgvYBD0o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw_4L1baVKf1fV9UZ1HDrc9G3hqg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/ShPMgvYBD0o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0bygqZpMFePqwZWx3iKnVOLyE9A",
            width: 720,
          },
        ],
        title:
          "ela tv - Yosan Getahun - Baala Gizee - New Ethiopian Oromo Music 2023 - ( Official Music Video )",
        videoId: "ShPMgvYBD0o",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/0ANE7XGDotvJfn_AOwL9Q5_GFC3hvD0o80-hnEqw_iKEFzEV2e97Y9Gv5nYkZm34rEivoEbXJbg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@Arbaaz672",
          channelId: "UCyzXFyIRR095t6rLmCTltUQ",
          title: "Arbaaz the Singer",
        },
        badges: [],
        descriptionSnippet: "Jubin Nautiyal all song new file song 2030.",
        isLiveNow: false,
        lengthSeconds: 4650,
        movingThumbnails: null,
        publishedTimeText: "5 months ago",
        stats: { views: 1309717 },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/VbhoE_spoTg/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAugCigIMCAAQARhlIEEoXDAP&rs=AOn4CLDTihMM1ehHu36ADwJ81heJGgdSsQ",
            width: 480,
          },
        ],
        title: "jubin Nautiyal new song 2023#jubinnautiyal new song file song",
        videoId: "VbhoE_spoTg",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKYYrXovd5Y4i_arKZLoZISQz1umMSBhp6xYxqVFug=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@ForbesBreakingNews",
          channelId: "UCg40OxZ1GYh3u3jBntB6DLg",
          title: "Forbes Breaking News",
        },
        badges: ["New"],
        descriptionSnippet:
          "Former President Donald Trump and AG Letitia James left the courtroom on Monday following testimony from the former president ...",
        isLiveNow: false,
        lengthSeconds: 62,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/43uaVwwKPzw/mqdefault_6s.webp?du=3000&sqp=CJyLqaoG&rs=AOn4CLClcRUxLeGdOpieqG_8Hk-HzFhk2A",
            width: 320,
          },
        ],
        publishedTimeText: "21 hours ago",
        stats: { views: 235761 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/43uaVwwKPzw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMKN9H3UGvpr-S0IiH21K-PK-1cg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/43uaVwwKPzw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAxpbPMv_zFLCAQ6Mjqd2BOq5Kjg",
            width: 720,
          },
        ],
        title:
          "WATCH: Donald Trump Leaves The Courtroom, Moments Later Followed By New York AG Letitia James",
        videoId: "43uaVwwKPzw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@ABCNews",
          channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
          title: "ABC News",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "Ian Pannell reports as Israel unleashes massive new strikes on Gaza, with new warnings for civilians to head south; Matt Rivers ...",
        isLiveNow: false,
        lengthSeconds: 1200,
        movingThumbnails: null,
        publishedTimeText: "1 day ago",
        stats: { views: 442557 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/F1H9U_D4-RA/hq720.jpg?sqp=-oaymwEiCOgCEMoBSFXyq4qpAxQIARUAAIhCGAFwAcABBu0BZmbmQQ==&rs=AOn4CLDVflg-UuoBlWbWv7yCDi01z0105w",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/F1H9U_D4-RA/hq720.jpg?sqp=-oaymwEiCNAFEJQDSFXyq4qpAxQIARUAAIhCGAFwAcABBu0BZmZmQg==&rs=AOn4CLDExHKfbrQ-RmQ8z-03QSr8KTlx-w",
            width: 720,
          },
        ],
        title: "ABC World News Tonight Full Broadcast - Nov. 05, 2023",
        videoId: "F1H9U_D4-RA",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@ABCNews",
          channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
          title: "ABC News",
        },
        badges: ["LIVE"],
        descriptionSnippet:
          "breakingnews #livenews #abcnews #news ABC News Live brings you 24/7 coverage of the latest news headlines and events ...",
        isLiveNow: true,
        lengthSeconds: null,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: { viewers: 4403 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzTbCK4LgDX2goVywcKhsYGj0OIg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi78QcHPft75MgJhotChhIxlVpfA",
            width: 720,
          },
        ],
        title: "LIVE: Latest News Headlines and Events l ABC News Live",
        videoId: "OOtxXPaQvoM",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/B7DgikhQ9ZwWvH9xy3Xfc8MjBQEUTWUQ55fWijyhZfeDwopX3w61OtMr5e98e82JDCYE6lCSVA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@CBSEveningNews",
          channelId: "UCAeWdyKJXGWmVAXFpgLNNTg",
          title: "CBS Evening News",
        },
        badges: ["New"],
        descriptionSnippet:
          "Former President Donald Trump will take the stand on Monday at his civil trial in New York. Trump's testimony will help the judge ...",
        isLiveNow: false,
        lengthSeconds: 83,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/WVzyE6u_kcc/mqdefault_6s.webp?du=3000&sqp=COX7qKoG&rs=AOn4CLCAV5QJsLwyMmmA5VS1doEen0x_Kg",
            width: 320,
          },
        ],
        publishedTimeText: "1 day ago",
        stats: { views: 42080 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/WVzyE6u_kcc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOGYM4NCLLFSJT9L8vUwhkBGr94A",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/WVzyE6u_kcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIjVpezkEA1RBEvdWXZkqBJwg1Dg",
            width: 720,
          },
        ],
        title: "Former President Trump to testify in New York on Monday",
        videoId: "WVzyE6u_kcc",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/B7DgikhQ9ZwWvH9xy3Xfc8MjBQEUTWUQ55fWijyhZfeDwopX3w61OtMr5e98e82JDCYE6lCSVA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@CBSEveningNews",
          channelId: "UCAeWdyKJXGWmVAXFpgLNNTg",
          title: "CBS Evening News",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "Former President Donald Trump testified Monday in his New York fraud trial. Trump repeatedly clashed with the judge, who ...",
        isLiveNow: false,
        lengthSeconds: 239,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/6EzP3twS-w8/mqdefault_6s.webp?du=3000&sqp=CN-eqaoG&rs=AOn4CLBt_JCv3m4DmqWNikgFc4-kqg_UjQ",
            width: 320,
          },
        ],
        publishedTimeText: "14 hours ago",
        stats: { views: 4282 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/6EzP3twS-w8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMKuOsdR4GVtmfiBcbuoFZOGQR3A",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/6EzP3twS-w8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuo1u7AZ8HAw8AykwyqfUw_9WeZA",
            width: 720,
          },
        ],
        title: "Trump takes stand in New York fraud trial",
        videoId: "6EzP3twS-w8",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@CNN",
          channelId: "UCupvZG-5ko_eiXAupbDfxWw",
          title: "CNN",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "After Eric Trump's final day of testimony in his father's New York civil fraud trial, he attacked the state and the attorney general.",
        isLiveNow: false,
        lengthSeconds: 388,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/V8esckMiMMk/mqdefault_6s.webp?du=3000&sqp=CIemqaoG&rs=AOn4CLANXo75otU1JdydJXF0oN9oepPO3w",
            width: 320,
          },
        ],
        publishedTimeText: "3 days ago",
        stats: { views: 852374 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/V8esckMiMMk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyTperqdPopNcMzx7lKVColXHZnA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/V8esckMiMMk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfYwtY5TuYj761XS7zA01f8UNneA",
            width: 720,
          },
        ],
        title:
          "'Going to hell': See Eric Trump's attacks on New York after final day of his testimony",
        videoId: "V8esckMiMMk",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/jzQp-6YNrrmY0RNebqrYYWDHn2bhOchDuaMosWDesP885TMYt0oPS9kBQnG_eqve-kjJzBWi-g=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],
          canonicalBaseUrl: "/@CBNnewsonline",
          channelId: "UCYI_ychRnL7sJrG6PUSBpQA",
          title: "CBN News",
        },
        badges: ["New"],
        descriptionSnippet:
          "A Hamas official justifies the October 7th attacks, saying they will carry out more like them, and says “Israel has no place on our ...",
        isLiveNow: false,
        lengthSeconds: 1348,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/L7OiOzpysnE/mqdefault_6s.webp?du=3000&sqp=CMjnqKoG&rs=AOn4CLBiqBgyJvIsDlMvnVKUejbuc5PtGw",
            width: 320,
          },
        ],
        publishedTimeText: "5 days ago",
        stats: { views: 537266 },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/L7OiOzpysnE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_NC8W2DdMTlFVd04UZWyUovXxhw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/L7OiOzpysnE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTj4VByjURWh6LGoKeu6v0Swt74A",
            width: 720,
          },
        ],
        title:
          "New Hamas Threats: Destroy Israel, More Sneak Attacks | CBN NewsWatch - November 2, 2023",
        videoId: "L7OiOzpysnE",
      },
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  // useEffect(() => {
  //   fetchSelectedCategoryData(selectedCategory);
  // }, [selectedCategory]);

  console.log(Content);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setContent(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        Content,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
