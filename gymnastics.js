var mainVm = new Vue({
    el: '#app',
    data: {
        // savedRoutine: [],
        complete: false,
        modalShow: false,
        subStartValue:0,
        skillTotalPoints:0,
        decimalStartValue:0,
        totalBonus: 0,
        bonusPoints: [],
        skillNumberPoints: 0,
        selections: [],
        totalPoints: [],
        startValue: 0,
        floor: {
            groupICompleted: false,
            groupIICompleted: false,
            groupIIICompleted: false,
            groupIVCompleted: false,
            doubleRequirement: false,
            deduction: 0,
            group1: {
                description: 'Non-Acrobatic Skills',
                groupPoints: 0,
                A: {
                    letterValue: 'A',
                    AValue: .1,
                    skills: [{
                            name: 'HANDSTAND TO L-SIT',
                            description: 'From handstand lower to L-sit or stradle L-sit',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/1.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false

                        },
                        {
                            name: 'STANDING PRESS HANDSTAND',
                            description: 'From stand, Swiss press to handstand (2s.)',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/2.png',
                            reference: "https://www.youtube.com/watch?v=IOV3PNxBGvk",
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'HANDSTAND',
                            description: 'Handstand (2 s.)',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'a',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/3.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'STRADLE PLANCHE',
                            description: 'Support lever, legs straddle (2 s.)',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/4.png',
                            reference: 'https://www.youtube.com/watch?v=17LM51miUFA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'HANDSTAND PIROUETTE',
                            description: '1/2 or 1/1 turn in handstand or to handstand',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'b',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/5.png',
                            reference: 'https://www.youtube.com/watch?v=ZMgzZazouCI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'L-SIT TO STAND',
                            description: 'From L-sit, etc., turn over backward to stand',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/6.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK WALKOVER',
                            description: 'From stand or rear support, push off 1 foot through handstand',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'c',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/7.png',
                            reference: 'https://www.youtube.com/watch?v=mF4F1Xvg1Bg',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT WALKOVER',
                            description: 'Front Walkover',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'd',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/8.png',
                            reference: 'https://www.youtube.com/watch?v=AKNAXpBQu1E',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SPLITS',
                            description: 'Cross or side split (stop required)',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'e',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/9.png',
                            reference: 'https://vimeo.com/151238496',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SCALE',
                            description: 'Any Standing Scale (2 s.)',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'f',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/10.png',
                            reference: 'https://www.youtube.com/watch?v=hkqKmq-Y76w',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'JUMP TO FRONT SUPPORT',
                            description: 'Jump backward to front support',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'g',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/11.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BUTTERFLY',
                            description: 'Butterfly',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'h',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/12.png',
                            reference: 'https://youtu.be/vbefem-b8p8',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'HELICOPTER',
                            description: 'Breakdance Variation',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/13.png',
                            reference: "https://www.youtube.com/embed/FXMkknrEF1k",
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FLAIR HALF SPINDLE',
                            description: 'Flair with 1/2 Spindle',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/14.png',
                            reference: "https://www.youtube.com/embed/_N158yVNXMM",
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'RUSSIAN',
                            description: 'Russian wendeswing with 360 or 540',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/15.png',
                            reference: 'https://youtu.be/QL5gCiOT54I',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK ROLL 1/2 TURN',
                            description: 'Roll bwd. through handstand with 1/2 turn',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group I',
                            groupIStyle: 'i',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_A/16.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                B: {
                    letterValue: 'B',
                    BValue: .2,
                    skills: [{
                            name: 'V-SIT',
                            description: 'V-sit (2 s.)',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/1.png',
                            reference: 'https://www.youtube.com/watch?v=0f6zcS48Bqg',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'PRESS HANDSTAND',
                            description: 'Piked body straight arm or straight body, bent arm press to handstand with legs together',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/2.png',
                            reference: 'https://www.youtube.com/watch?v=1SpW7Mr4AgA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SWISS PRESS HANDSTAND',
                            description: 'Swiss press from split, L-sit, stradle L-sit or front support (2 s.)',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/3.png',
                            reference: 'https://www.youtube.com/watch?v=OW_ljV5CBKk',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'JAPANESE HANDSTAND',
                            description: 'Press or lower or swing to Japanese handstand',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/4.png',
                            reference: 'https://www.youtube.com/watch?v=ygym5oXlRWo',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'PLANCHE',
                            description: 'Support lever (2 s.)',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/5.png',
                            reference: 'https://www.youtube.com/watch?v=w_gB_KOeZNI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'STR. PLANCHE HANDSTAND',
                            description: 'From straddled support lever (2 s.) press handstand (2 s.)',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/6.png',
                            reference: 'https://www.youtube.com/watch?v=5qR6SMzGbPs',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'STALDER ROLL HANDSTAND',
                            description: 'Endo Roll to handstand (2 s.)',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/7.png',
                            reference: 'https://www.youtube.com/watch?v=yAlX43vn3oc',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'B SCALE',
                            description: 'Any standing scale with 180 straddle, no hand. hold (2 s.)',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'j',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/8.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'ENDO',
                            description: 'Jump backward with pike-stretch or with 1/1 turn to front support',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'k',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/9.png',
                            reference: 'https://www.youtube.com/watch?v=FpgMpM6Awps',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'TONG FEI',
                            description: 'Butterfly with 1/1 twist forward or backward',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'l',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/10.png',
                            reference: 'https://www.youtube.com/watch?v=7Kjq1CbswFk',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FLAIR HANDSTAND',
                            description: 'Circles or flair to handstand',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/11.png',
                            reference: 'https://www.youtube.com/watch?v=xf-dmkFutNE',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'HANDSTAND TO FLAIR',
                            description: 'Lower from handstand to flair or circle',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/12.png',
                            reference: 'https://www.youtube.com/watch?v=vwcToYbWsTw',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SPINDLE FLAIR',
                            description: 'Flair with 1/1 spindle (in 2 circles)',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/13.png',
                            reference: 'https://www.youtube.com/watch?v=-XIthLkD3qA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FLAIR 1/2 SPINDLE HANDSTAND',
                            description: 'Flair with 1/2 spindle to handstand',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/14.png',
                            reference: 'https://www.youtube.com/watch?v=iTYjHesijLQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'RUSSIANS',
                            description: 'Russian wendeswing with 720 or 900',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/15.png',
                            reference: 'https://www.youtube.com/watch?v=BtwkcidJTfY',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK ROLL FULL TURN',
                            description: 'Roll backward with 1/1 turn through handstand',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group I',
                            groupIStyle: 'm',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_B/16.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                C: {
                    letterValue: 'C',
                    CValue: .3,
                    skills: [{
                            name: 'MANNA',
                            description: 'V-sit with legs horiz (2 s.)',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/1.png',
                            reference: 'https://www.youtube.com/watch?v=Tk8ZRf5xIdY',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'V PRESS HANDSTAND',
                            description: 'V-sit (2 s.) and press to handstand (2 s.) also with straddle legs',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/2.png',
                            reference: 'https://www.youtube.com/watch?v=qebeJexc3Ms',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'JAPANESE PRESS',
                            description: 'From split press to Japanese handstand (2 s.)',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/3.png',
                            reference: 'floor split press japanese handstand  gymnastics',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SWALLOW',
                            description: 'Swallow (2 s.)',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/4.png',
                            reference: 'https://www.youtube.com/watch?v=zGoMHGZocoI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'PLANCHE PRESS',
                            description: 'From support lever (2 s.) press handstand (2 s.)',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/5.png',
                            reference: 'https://www.youtube.com/watch?v=yYCVsC-2E08',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'PIKED STALDER',
                            description: 'Endo roll piked to handstand (2 s.), also final phase with straddle',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/6.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'C BUTTERFLY',
                            description: 'Butterfly with 2/1 twist',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'n',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/7.png',
                            reference: 'https://www.youtube.com/watch?v=di0ihPN5o-c',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'GOGOLADZE',
                            description: 'Flair or circle to handstand continue to flair or circle',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/8.png',
                            reference: 'https://www.youtube.com/watch?v=4Mq6yrezuRA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SPINDLE FLAIR HANDSTAND',
                            description: 'Flair with 270 spindle (in 2 circles) directly to handstand',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/9.png',
                            reference: 'https://www.youtube.com/watch?v=WZqevELmaLE',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FEDORCHENKO',
                            description: 'Russian wendeswing with 1080 or more',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_C/10.png',
                            reference: 'https://www.youtube.com/watch?v=BtwkcidJTfY',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                D: {
                    letterValue: 'D',
                    DValue: .4,
                    skills: [{
                            name: 'MANNA PRESS HANDSTAND',
                            description: 'Manna (2 s.) and press to handstand (2 s.) also with straddle legs',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_D/1.png',
                            reference: 'https://www.youtube.com/watch?v=fuGpGvr-8Bc',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'MANNA TO HANDSTAND',
                            description: 'Manna (2 s.) turn over to handstand (2 s.)',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_D/2.png',
                            reference: 'https://www.youtube.com/watch?v=KAp8aEmPSfE',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'ALVARINO',
                            description: 'From Swallow (2 s.) press to Japanese handstand (2 s.)',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group I',
                            groupIStyle: 'strength',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_D/3.png',
                            reference: 'https://www.youtube.com/watch?v=zJ4kJ8ZamDQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'AIR FLAIR',
                            description: 'Flair hopping with 360 turn backwards through handstand and back to flair (2 hops)',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group 1',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_D/4.png',
                            reference: 'https://www.youtube.com/watch?v=MBXxXPR40O0',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SPINDLE FLAIR HANDSTAND FLAIR',
                            description: 'Flair with 270 spindle (in 2 circles) directly to handstand and continue to circle flair',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group I',
                            groupIStyle: 'pommel',
                            groupDescription: 'Non-Acrobatic Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor1_NonAcrobatic_D/5.png',
                            reference: 'https://www.youtube.com/watch?v=-XIthLkD3qA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                }
            },
            group2: {
                description: 'Front Salto Skills',
                groupPoints: 0,
                A: {
                    letterValue: 'A',
                    AValue: .1,
                    skills: [{
                            name: '-',
                            description: 'Neck or headspring with 1/2 turn to handstand or 1/1 turn to rear support',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_A/1.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT HANDSPRING',
                            description: 'Front handspring or flyspring',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_A/2.png',
                            reference: 'https://www.youtube.com/watch?v=zjewNdgEq90',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DIVE ROLL',
                            description: 'Dive Roll',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_A/3.png',
                            reference: 'https://www.youtube.com/watch?v=ueWNFDCiJ8Q',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT TUCK/PIKE',
                            description: 'Salto forward tucked or piked',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_A/4.png',
                            reference: 'https://www.youtube.com/watch?v=md23mspiJbQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'AERIAL WALKOVER',
                            description: 'Aerial Walkover forward',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_A/5.png',
                            reference: 'https://www.youtube.com/watch?v=32MlKbw_OnA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT HALF',
                            description: 'Salto tucked and piked 1/2 turn',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_A/6.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                B: {
                    letterValue: 'B',
                    BValue: .2,
                    skills: [{
                            name: '1/1 TURN HANDSTAND',
                            description: 'Jump with 1/1 twist to forward handspring',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_B/1.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT LAYOUT',
                            description: 'Salto forward stretched',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_B/2.png',
                            reference: 'https://www.youtube.com/watch?v=aBSOSwDWArs',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT FULL',
                            description: 'Salto tucked with 1/1 turn',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_B/3.png',
                            reference: 'https://www.youtube.com/watch?v=vxdr4vY_QnQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BRANNY LAYOUT',
                            description: 'Salto forward stretched with 1/2 turn',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_B/4.png',
                            reference: 'https://www.youtube.com/watch?v=vxdr4vY_QnQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'TUCKED RUDY',
                            description: 'Salto tucked 3/2 turn',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_B/5.png',
                            reference: 'https://www.youtube.com/watch?v=vxdr4vY_QnQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT 1 AND 1/4',
                            description: 'Salto forward tucked or piked to front support',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_B/6.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                C: {
                    letterValue: 'C',
                    CValue: .3,
                    skills: [{
                            name: 'FRONT 1 AND 1/4 LAYOUT',
                            description: 'Salto forward stretched to front support',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_C/1.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT FULL LAYOUT',
                            description: 'Salto forward stretched with 1/1 turn',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_C/2.png',
                            reference: 'https://www.youtube.com/watch?v=vxdr4vY_QnQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'RUDY LAYOUT',
                            description: 'Salto forward stretched with 3/2 turn',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_C/3.png',
                            reference: 'https://www.youtube.com/watch?v=vxdr4vY_QnQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT FULL 1 AND 1/4',
                            description: 'Salto forward in any position with full turn to front support',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_C/4.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                D: {
                    letterValue: 'D',
                    DValue: .4,
                    skills: [{
                            name: 'MORANDI',
                            description: 'Hanspring salto forward tucked (Marinich style)',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_D/1.png',
                            reference: 'https://www.youtube.com/watch?v=3SCznCNqc0g',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE FRONT',
                            description: 'Double salto forward tucked',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_D/2.png',
                            reference: 'https://www.youtube.com/watch?v=z6L51SiNtbY',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FRONT DOUBLE FULL',
                            description: 'Salto forward stretched with 2/1 turn',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_D/3.png',
                            reference: 'https://www.youtube.com/watch?v=_XrtUJ81t6w',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DEFER',
                            description: 'Jump forward with 1/2 turn to double salto backward tucked or piked',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_D/4.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                E: {
                    letterValue: 'E',
                    EValue: .5,
                    skills: [{
                            name: 'FRONT DOUBLE PIKE',
                            description: 'Double salto forward piked',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_E/1.png',
                            reference: 'https://www.youtube.com/watch?v=0s5Gz_UM8KU',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE FRONT HALF',
                            description: 'Double salto forward tucked with 1/2 turn',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_E/2.png',
                            reference: 'https://www.youtube.com/watch?v=OFK3qiXrJL8',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'RANDY',
                            description: 'Double salto forward piked',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_E/3.png',
                            reference: 'https://www.youtube.com/watch?v=3us9h2H3Lzg',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                F: {
                    letterValue: 'F',
                    FValue: .6,
                    skills: [{
                            name: 'DOUBLE PIKE HALF',
                            description: 'Double salto forward piked with 1/2 turn',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_FGH/1.png',
                            reference: 'https://www.youtube.com/watch?v=eSITioQT3NU',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SHIRAI 2',
                            description: 'Salto forward stretched with 3/1 turn',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_FGH/2.png',
                            reference: 'https://www.youtube.com/watch?v=sTfbicZoE8g',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'Full DOUBLE FRONT',
                            description: 'Double salto forward with 1/1 turn tucked',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group II',
                            groupDescription: 'Front Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor2_FrontSalto_FGH/3.png',
                            reference: 'https://www.youtube.com/watch?v=bPxncXWWu7o',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                }
            },
            group3: {
                description: 'Back Salto Skills',
                groupPoints: 0,
                A: {
                    letterValue: 'A',
                    AValue: .1,
                    skills: [{
                            name: 'BACK TUCK/PIKE',
                            description: 'Salto backward tucked or piked',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_A/1.png',
                            reference: 'https://www.youtube.com/watch?v=WD1h2bSH1eY',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false

                        },
                        {
                            name: 'BACK HALF TUCK/PIKE',
                            description: 'Salto backward tucked or piked with 1/2 turn',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_A/2.png',
                            reference: 'https://www.youtube.com/watch?v=rMle2G5AOdQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK HANDSPRING',
                            description: 'Back handspring',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_A/3.png',
                            reference: 'https://www.youtube.com/watch?v=TZTevhiE5BI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'ARABIAN DIVE ROLL',
                            description: 'Jump backward with half turn to roll forward',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_A/4.png',
                            reference: 'https://www.youtube.com/watch?v=8KtmqP3Ouq4',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'ARABIAN FRONT HANDSPRING',
                            description: 'Jump backward with 1/2 turn to handspring forward',
                            value: 'A',
                            valuePoints: .1,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_A/5.png',
                            reference: 'https://www.youtube.com/watch?v=jzVIICSVLdM',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                B: {
                    letterValue: 'B',
                    BValue: .2,
                    skills: [{
                            name: 'BACK LAYOUT',
                            description: 'Salto backward stretched',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_B/1.png',
                            reference: 'https://www.youtube.com/watch?v=3v0rgdehz3k',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK LAYOUT HALF',
                            description: 'Salto backward stretched with half turn',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_B/2.png',
                            reference: 'https://www.youtube.com/watch?v=8Dau9AJsP2U',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'WHIP BACK',
                            description: 'Tempo salto backward',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_B/3.png',
                            reference: 'https://www.youtube.com/watch?v=xTgRpkpapuI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK 3/2 TUCKED',
                            description: 'Salto backward tucked with 3/2 turn',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_B/4.png',
                            reference: 'https://www.youtube.com/watch?v=0um2RsXyUyg',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'LAYOUT FULL',
                            description: 'Salto backward stretched with 1/1 turn',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_B/5.png',
                            reference: 'https://www.youtube.com/watch?v=JsLvr4D1AwU',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'ARABIAN 1 AND 1/4',
                            description: 'Jump backward with 1/2 turn to salto forward tucked or piked to front support',
                            value: 'B',
                            valuePoints: .2,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_B/6.png',
                            reference: 'No Video Available',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                C: {
                    letterValue: 'C',
                    CValue: .3,
                    skills: [{
                            name: 'DOUBLE BACK TUCK',
                            description: 'Double salto backward tucked',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_C/1.png',
                            reference: 'https://www.youtube.com/watch?v=f2C6UexLu8A',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE BACK PIKE',
                            description: 'Double salto backward piked',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_C/2.png',
                            reference: 'https://www.youtube.com/watch?v=kEwVLRqHRA8',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK 3/2 LAYOUT',
                            description: 'Salto backward stretched with 3/2 turn',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_C/3.png',
                            reference: 'https://www.youtube.com/watch?v=G55M_P35xSA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE FULL LAYOUT',
                            description: 'Salto backward stretched with 2/1 turn',
                            value: 'C',
                            valuePoints: .3,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_C/4.png',
                            reference: 'https://www.youtube.com/watch?v=hpsgwGvBdW8&t=12s',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                D: {
                    letterValue: 'D',
                    DValue: .4,
                    skills: [{
                            name: 'FULL TWISTING DOUBLE BACK',
                            description: 'Double salto backward tucked or piked with 1/1 turn. Also Arabian double tucked or piked 1/2 turn',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_D/1.png',
                            reference: 'https://www.youtube.com/watch?v=RKuCY_I9HQs',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'ARABIAN DOUBLE',
                            description: 'Arabian double tucked or piked or double salto backward tucked or piked with 1/2 turn',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_D/2.png',
                            reference: 'https://www.youtube.com/watch?v=E_c-Dylz9aI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK 5/2 LAYOUT',
                            description: 'Salto backward stretched with 5/2 turn',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_D/3.png',
                            reference: 'https://www.youtube.com/watch?v=2AMx2podVhM',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK TRIPLE FULL',
                            description: 'Salto backward stretched with 3/1 turn',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_D/4.png',
                            reference: 'https://www.youtube.com/watch?v=z805keIFnV4',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE LAYOUT',
                            description: 'Double salto backward stretched',
                            value: 'D',
                            valuePoints: .4,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_D/5.png',
                            reference: 'https://www.youtube.com/watch?v=1USTwc5lD6s',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                E: {
                    letterValue: 'E',
                    EValue: .5,
                    skills: [{
                            name: 'DOUBLE DOUBLE TUCK',
                            description: 'Double salto backward tucked with 2/1 turn',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_E/1.png',
                            reference: 'https://www.youtube.com/watch?v=zlj2n97OjO4',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE BACK 3/2',
                            description: 'Double salto backward tucked with 3/2 turn',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_E/2.png',
                            reference: 'https://www.youtube.com/watch?v=KPTv7BSD5ts',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'BACK 7/2',
                            description: 'Salto backward stretched with 7/2 turn',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_E/3.png',
                            reference: 'https://www.youtube.com/watch?v=KPTv7BSD5ts',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'LOU YUN',
                            description: 'Double salto straddled with 1/1 turn',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_E/4.png',
                            reference: 'https://www.youtube.com/watch?v=uSp8ysQhBBM',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'TAMAYO',
                            description: 'Arabian Jump backward to double salto forward stretched or double salto backwards stretched with 1/2 turn',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_E/5.png',
                            reference: 'https://www.youtube.com/watch?v=vQilnlEoP6g',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'FULL TWISTING DBL LAYOUT',
                            description: 'Double salto backward stretched with 1/1 turn or arabian jump backward to double salto forward stretched with 1/2 turn',
                            value: 'E',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_E/6.png',
                            reference: 'Full twisting double layout mens floor',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                F: {
                    letterValue: 'F',
                    EValue: .6,
                    skills: [{
                            name: 'DOUBLE TUCK 5/2',
                            description: 'Double salto backward tuked with 5/2 turn',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/2.png',
                            reference: 'https://www.youtube.com/watch?v=2yuAn-OwdeA',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'SHIRAI/ NGUYEN',
                            description: 'Salto backward stretched with 4/1 turn',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/4.png',
                            reference: 'https://www.youtube.com/watch?v=p5d_esUdrjo',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: false,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'KOLYVANOV',
                            description: 'Salto backward stretched with 2/1 turn and salto backward piked',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/5.png',
                            reference: 'https://www.youtube.com/watch?v=yzDL_rBOj_4',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'ARABIAN DBL LAYOUT FULL',
                            description: 'Double salto backward stretched with 3/2 turn or Arabian jump backward to double salto forward stretched with 1/1 turn',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/6.png',
                            reference: 'https://www.youtube.com/watch?v=KPTv7BSD5ts',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE DOUBLE LAYOUT',
                            description: 'Double salto backward stretched with 2/1 turn',
                            value: 'F',
                            valuePoints: .6,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/7.png',
                            reference: 'https://www.youtube.com/watch?v=4MyCbj8hocQ',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                G: {
                    letterValue: 'G',
                    EValue: .7,
                    skills: [{
                            name: 'RI JONG SONG',
                            description: 'Double salto backward tucked with 3/1 turn',
                            value: 'G',
                            valuePoints: .7,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/1.png',
                            reference: 'https://www.youtube.com/watch?v=_cTTdJxsgAI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'DOUBLE 5/2 LAYOUT',
                            description: 'Double salto backward stretched with 5/2 turn',
                            value: 'G',
                            valuePoints: .7,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/8.png',
                            reference: 'https://www.youtube.com/watch?v=_cTTdJxsgAI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                },
                H: {
                    letterValue: 'H',
                    EValue: .8,
                    skills: [{
                            name: 'SHIRAI 3',
                            description: 'Double salto backward stretched with 3/1 turn',
                            value: 'H',
                            valuePoints: .8,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/9.png',
                            reference: 'https://www.youtube.com/watch?v=of68F9RLt5Y',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        },
                        {
                            name: 'LIUKEN',
                            description: 'Triple salto backward tucked',
                            value: 'H',
                            valuePoints: .8,
                            group: 'Group III',
                            groupDescription: 'Back Salto Skills',
                            totalPoints: '',
                            pic: 'public/Floor/floor3_BackSalto_FGH/3.png',
                            reference: 'https://www.youtube.com/watch?v=pTiPZmp_drI',
                            connection: false,
                            bigConnection: false,
                            connectionCheck:false,
                            bigConnectionCheck: false,
                            double: true,
                            subtotalPoints: 0,
                            groupIV: false
                        }
                    ]
                }
            },
            group4: {
                description: 'Dismount',
                groupPoints: 0
            }
        }
        // horse: {
        //     group1:{ 
        //         description: 'Scissors',
        //         group1Points: .5,
        //         A:{
        //             letterValue: 'A',
        //             AValue: .1,
        //             skills:[{
        //                 name:'Front Scissor',
        //                 description:'Scissor forward',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Front Scissor half',
        //                 description:'Scissor forward w 1/2 turn',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Back Scissor',
        //                 description:'Scissor backward w 1/2 turn',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Back Scissor half',
        //                 description:'Scissor backward w 1/2 turn',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }]
        //         },
        //         B:{
        //             letterValue: 'B',
        //             BValue: .2,
        //             skills:[{
        //                 name:'Scissor forward with hop swd. (also with 1/2 turn',
        //                 description:'Scissor forward with hop swd. (also with 1/2 turn',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Double scissor forward',
        //                 description:'Double scissor forward (1/4 turn forward and 1/4 turn backward',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Scissor backward with hop swd. (also with 1/2 turn',
        //                 description:'Scissor backward with hop swd. (also with 1/2 turn',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Double scissor backward (1/4 turn forward and 1/4 turn backward',
        //                 description:'Double scissor backward (1/4 turn forward and 1/4 turn backward',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Leg cut through handstand',
        //                 description:'Leg cut or undercut through handstand and lower to support with straddle legs',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }]
        //         },
        //         C:{
        //             letterValue: 'C',
        //             CValue: .3,
        //             skills:[{
        //                 name:'Stepanyan',
        //                 description:'Double scissor forward with travel sideways through handstand',
        //                 value:'C',
        //                 valuePoints:.3,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Scissor (3/3)',
        //                 description:'Scissor forward with hop swd. from one end to the other (3/3)',
        //                 value:'C',
        //                 valuePoints:.3,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Double scissor hop',
        //                 description:'Double scissor forward (1/4 turn forward and 1/4 turn backward) with travel swd.',
        //                 value:'C',
        //                 valuePoints:.3,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Scissor backward with hop swd. from one end to the other (1-2 a 4-5)',
        //                 description:'Scissor backward with hop swd. from one end to the other (1-2 a 4-5)',
        //                 value:'C',
        //                 valuePoints:.3,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Leg cut or undercut to handstand lower to flair or circle',
        //                 description:'Leg cut or undercut backward through handstand and lower to flair or circle',
        //                 value:'C',
        //                 valuePoints:.3,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }]
        //         },
        //         D:{
        //             letterValue: 'D',
        //             CValue: .4,
        //             skills:[{
        //                 name:'Li Ning',
        //                 description:'Scissor forward with 1/4 turn through handstand on one pommel, lower to support with straddle legs on the other arm',
        //                 value:'D',
        //                 valuePoints:.4,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Mikulak',
        //                 description:'Double scissor forward with hop sideways from one end to the other (3/3)',
        //                 value:'D',
        //                 valuePoints:.4,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Back scissor through handstand',
        //                 description:'Swing backward with 1/4 turn through handstand on one pommel, lower to support with straddled legs on the other arm',
        //                 value:'D',
        //                 valuePoints:.4,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Bryan',
        //                 description:'Scissor forward 1/4 turn to handstand, 1/4 turn and straddle down backward on one arm on the other pommel',
        //                 value:'D',
        //                 valuePoints:.4,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Bryan',
        //                 description:'Scissor backward 1/4 turn to handstand, 1/4 turn and straddle down backwards on 1 arm to the other pommel',
        //                 value:'D',
        //                 valuePoints:.4,                                 
        //                 group:'Group I',
        //                 groupDescription:this.horse.group1.description,     
        //                 groupPoints:this.horse.group1.group1points,                                 
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }]
        //         }
        //     },
        //     group2:{ 
        //         description: 'Circles and Flairs',
        //         group2Points: .5,
        //         A:{
        //             letterValue: 'A',
        //             AValue: .1,
        //             skills:[{
        //                 name:'Circle or flair',
        //                 description:'Any circle or flair in side support',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Front circle',
        //                 description:'Circle in cross support frontways on end',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Back circle',
        //                 description:'Circle in cross support rearways on end',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Side circle',
        //                 description:'Circle in side support, 1/4 spindle to cross support',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Circle with 1/4 spindle to side support',
        //                 description:'Cross support on end, circle with 1/4 spindle to side support',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Double rear (kehr)',
        //                 description:'Double rear (kehr)',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Wendeswing forward half turn',
        //                 description:'Wendeswing forward with 1/2 turn to support forward on the end, from side support using one or two pommels',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Schwabenflank',
        //                 description:'Schwabenflank',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Russian wendeswing with 180 or 270',
        //                 description:'Russian wendeswing with 180 or 270',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Leather Russian wendeswing with 180, or 270 also with travel',
        //                 description:'On the leather, Russian wendeswing with 180, or 270 also with travel',
        //                 value:'A',
        //                 valuePoints:.1,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }]
        //         },
        //         B:{
        //             letterValue: 'B',
        //             BValue: .2,
        //             skills:[{
        //                 name:'Pommel circle',
        //                 description:'Circle in side support on one pommel',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Circle outside pommels or in between',
        //                 description:'Circle with support outside pommels or in between',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Circles in cross support on one pommel (from or to 1/4 turn forward)',
        //                 description:'Circles in cross support on one pommel (from or to 1/4 turn forward)',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Circles between the pommels',
        //                 description:'Circles in cross support between the pommels',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Half spindle',
        //                 description:'Side support 1/2 spindle',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Flair to handstand',
        //                 description:'Flair or circle through handstand and lower to support with straddled legs',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Direct Stockli A (DSA)',
        //                 description:'Direct Stockli A (DSA)',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Direct Stockli B (DSB)',
        //                 description:'Direct Stockli B (DSB)',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Kehr hop',
        //                 description:'Kehrswing backward hop with 1/2 turn on the pommels',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Kehr 270 (Sohn technique)',
        //                 description:'Kehr with 270 turn on one pommel (Sohn technique) from cross to side support',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Tramlot',
        //                 description:'Direct Tramlot',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Reverse Stockli',
        //                 description:'Reverse Stockli, 180 or 270 turn in one circle',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Double Swiss',
        //                 description:'Double Swiss',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Czechkehre',
        //                 description:'Czechkehre on the leather or pommels',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Two pommel Russian',
        //                 description:'Russian wendeswing with 360 or 540',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'Russian',
        //                 description:'On the leather, Russian wendeswing with 360 or 540',
        //                 value:'B',
        //                 valuePoints:.2,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             },
        //             {
        //                 name:'One pommel Russian',
        //                 description:'Russian wendeswing with 180 or 270 on one pommel or between the pommels',
        //                 value:'B',  
        //                 valuePoints:.2,                             
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }]
        //         },
        //         C:{
        //             letterValue: 'C',
        //             CValue: .3,
        //             skills:[{
        //                 name:'Tippelt',
        //                 description:'Flair or circle through handstand (with or without 1/2 turn) and lower to flair or circle',
        //                 value:'C', 
        //                 valuePoints:.3,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Flair hop handstand to support',
        //                 description:'Flair with hop travel backward through handstand and lower to support with straddle legs',
        //                 value:'C',  
        //                 valuePoints:.3,                                
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Reverse Stockli straddle through handstand to support',
        //                 description:'Reverse Stockli or DSA straddle through handstand and lower to support with straddle legs or circle',
        //                 value:'C',  
        //                 valuePoints:.3,                                
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Kehr with 270 on one pommel',
        //                 description:'Kehr with 270 turn on 1 pommel (Sohn technique) from side to cross support',
        //                 value:'C',  
        //                 valuePoints:.3,                                
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Reverse Stockli 270 to one pommel',
        //                 description:'Reverse Stockli with 270 turn to 1 pommel',
        //                 value:'C',  
        //                 valuePoints:.3,                                
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Two pommel Russian 720 or 900',
        //                 description:'Russian wendeswing with 720 or 900',
        //                 value:'C',  
        //                 valuePoints:.3,                                
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //             {
        //                 name:'Russian 720 or 900',
        //                 description:'On the leather, Russian wendeswing with 720 or 900',
        //                 value:'C',  
        //                 valuePoints:.3,                                
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 
        //              {
        //                 name:'One pommel Russian 360 or 540',
        //                 description:'Russian wendeswing with 360 or 540 on 1 pommel or between the pommels',
        //                 value:'C',  
        //                 valuePoints:.3,                                
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }]
        //         },
        //         D:{
        //             letterValue: 'D',
        //             DValue: .3,
        //             skills:[{
        //                 name:'Tippelt',
        //                 description:'Flair or circle through handstand (with or without 1/2 turn) and lower to flair or circle',
        //                 value:'D', 
        //                 valuePoints:.4,                                 
        //                 group:'Group II',
        //                 groupDescription:this.horse.group2.description,                                      
        //                 totalPoints:'',                                     
        //                 pic:'',
        //                 reference:'',
        //             }, 

    },
    updated() {
        // ensure that the bootstrap tooltips are being activated on the elements that we want them on by attatching a new one each time the page is updated
        this.$nextTick(function () { //$nextTick is built into vue, and reuns after the lifecycle method it is contained in
            $('[data-toggle="tooltip"]').tooltip()
        })
        if (this.complete && !this.modalShow) {
            $('#connectionModal').modal('show')
            this.modalShow = true
        }

    },
    created() {
        $.get('/select', function(data) {
            mainVm.selections = data
        })

        // $.get('/routine', function(data){
        //     mainVm.savedRoutine = data
        // })
        
    },
    methods: {
        select: function(event, skill) {
            event.preventDefault()
            //skill repeat
            let isSelected = !!this.selections.find((sel) => { //!! to convert to boolean .find finds selection in an array of objects then return the whole object if condition is true
                return sel.name === skill.name
            })
            console.log(isSelected)
            if (isSelected) {
                alert('You cannot repeat skills')
                return
            }
            //group maximum 5 skils
            var result = this.selections.filter((sel) => {
                return sel.group === skill.group
            })
            console.log('result', result)
            if (result.length > 4) {
                alert('You cannot have more than 5 of the same element group in your routine')
                return
            }
            //pommel/strength max 2
            if (skill.group === 'Group I') {
                var result2 = this.selections.filter((sel) => {
                    return sel.groupIStyle === skill.groupIStyle
                })
                console.log('result2', result2)
                if (result2.length > 1) {
                    alert('You cannot have more than 2 group One Strength elements or more than 2 Pommel elements per routine')
                    return
                }
            }
            //max ten skills
            if (this.selections.length > 9) {
                alert('You are allowed only 10 skills per routine')
                return
            }

            $.post('/select', { skill }, function(data) {
                console.log('$POST', data)
                mainVm.selections.push(data)
                //mainVm.getFreshData()
                if (mainVm.selections.length === 10) {
                    mainVm.groupIVComplete()
    
                }
            })
        },

        // save: function(event, rountine){
        //     $.post('/routine', { routine: this.selections }, function(data) {
        //         console.log(data)
        //     })
        // },

        getFreshData: function(event) {
            $.get('/select', function(data) {
                mainVm.selections = data
            })
        },
        deleter: function(event, selection) {
            console.log(selection)
            $.post('/deleteSelection', { id: selection._id }, (data) => {
                // console.log('$POST REMOVE', data)
                this.complete                 =false
                this.modalShow                =false
                this.subStartValue            =0
                this.skillTotalPoints         =0
                this.decimalStartValue        =0
                this.totalBonus               = 0
                this.bonusPoints              = []
                this.skillNumberPoints        = 0
                this.selections               = []
                this.totalPoints              = []
                this.startValue               = 0
                this.floor.groupICompleted    = false
                this.floor.groupIICompleted   = false
                this.floor.groupIIICompleted  = false
                this.floor.groupIVCompleted   = false
                this.floor.doubleRequirement  = false

                this.getFreshData()
            })
        },
//skill Number points
        mkPoint: function(index) {
            switch (index) {
                case 0:
                    { this.skillNumberPoints = 2; return 2; }
                case 1:
                    { this.skillNumberPoints = 2; return 0; }
                case 2:
                    { this.skillNumberPoints = 4; return 2; }
                case 3:
                    { this.skillNumberPoints = 4; return 0; }
                case 4:
                    { this.skillNumberPoints = 6; return 2; }
                case 5:
                    { this.skillNumberPoints = 6; return 0; }
                case 6:
                    { this.skillNumberPoints = 10; return 4; }
                case 7:
                    { this.skillNumberPoints = 10; return 0; }
                case 8:
                    { this.skillNumberPoints = 10; return 0; }
                case 9:
                    { this.skillNumberPoints = 10; return 0; }
            }
        },
        calculated: function() {
            this.checked()
            if (this.selections.length === 10) {
                for (var i = 0; i < this.bonusPoints.length; i++) {
                    this.totalBonus += this.bonusPoints[i]
                    console.log('bonus', this.totalBonus)
                }
                for (var i = 0; i < this.selections.length; i++) {
                    this.skillTotalPoints = this.selections[i].valuePoints
                    this.totalPoints.push(this.skillTotalPoints)
                    console.log('skillTotalPoints', this.skillTotalPoints)
                    console.log('totalPoints', this.totalPoints)
                }
                for (var i = 0; i < this.totalPoints.length; i++) {
                    this.subStartValue += this.totalPoints[i]
                    console.log('subStartValue', this.subStartValue)
                }
                this.decimalStartValue = this.subStartValue + this.floor.group1.groupPoints + this.floor.group2.groupPoints + this.floor.group3.groupPoints + this.floor.group4.groupPoints + this.skillNumberPoints + this.deduction + this.totalBonus

                this.startValue = Math.round(100 * this.decimalStartValue) / 100
            } else {
                alert ('please include 10 skills before calculating the Start Value')
            }
        },

        newRoutine: function(){
            this.complete                 =false
            this.modalShow                =false
            this.selections = []
            this.subStartValue            =0
            this.skillTotalPoints         =0
            this.decimalStartValue        =0
            this.totalBonus               = 0
            this.bonusPoints              = []
            this.skillNumberPoints        = 0
            this.selections               = []
            this.totalPoints              = []
            this.startValue               = 0
            this.floor.groupICompleted    = false
            this.floor.groupIICompleted   = false
            this.floor.groupIIICompleted  = false
            this.floor.groupIVCompleted   = false
            this.floor.doubleRequirement  = false

            $.post('/deleteAll', function(data) {
                console.log(data) // details about deletion
                this.getFreshData()
            })
            
        },
        
        color: function(value) {
            if (value === 'A') {
                return 'red'
            } else if (value === 'B') {
                return 'orange'
            } else if (value === 'C') {
                return 'yellow'
            } else if (value === 'D') {
                return 'green'
            } else if (value === 'E') {
                return 'blue'
            } else if (value === 'F') {
                return 'indigo'
            } else if (value === 'G') {
                return 'violet'
            } else if (value === 'H') {
                return 'purple'
            }
        },

        groupIVComplete: function() {
            if (this.selections[9]) {
                this.selections = this.selections.map(function(element) {
                    element.groupIV = true
                    mainVm.floor.groupIVCompleted = true
                    return element
                })
                this.groupFourUpdate() 
                this.connection()
            }
        },
//+
        groupFourUpdate: function() {
            this.selections[9].group = 'group IV'
            this.selections[9].groupDescription = 'group IV'

            if (this.selections[9].value === 'A') {
                this.selections[9]['groupDisplayedPts'] = 0
                this.floor.group4.groupPoints = 0
                return 0
            } else if (this.selections[9].value === 'B') {
                this.selections[9]['groupDisplayedPts'] = 0
                this.floor.group4.groupPoints = 0
                return 0
            } else if (this.selections[9].value === 'C') {
                this.selections[9]['groupDisplayedPts'] = .3
                this.floor.group4.groupPoints = .3
                return .3
            } else if (this.selections[9].value === 'D') {
                this.selections[9]['groupDisplayedPts'] = .5
                this.floor.group4.groupPoints = .5
                return .5
            } else if (this.selections[9].value === 'E') {
                this.selections[9]['groupDisplayedPts'] = .5
                this.floor.group4.groupPoints = .5
                return .5
            } else if (this.selections[9].value === 'F') {
                this.selections[9]['groupDisplayedPts'] = .5
                this.floor.group4.groupPoints = .5
                return .5
            } else if (this.selections[9].value === 'G') {
                this.selections[9]['groupDisplayedPts'] = .5
                this.floor.group4.groupPoints = .5
                return .5
            } else if (this.selections[9].value === 'H') {
                this.selections[9]['groupDisplayedPts'] = .5
                this.floor.group4.groupPoints = .5
                return .5
            }
        },
        checked: function() {
            var bonus = 0
            for (var i = 1; i < this.selections.length; i++) {
                if (this.selections[i].connectionCheck){
                    bonus = .1
                    mainVm.bonusPoints.push(bonus)
                } else if (this.selections[i].bigConnectionCheck){
                    bonus = .2
                    mainVm.bonusPoints.push(bonus)
                }
            }
        },
//+
        connection: function() {
            for (var i = 1; i < this.selections.length; i++) {
                if (this.selections[i].value === 'B' && this.selections[i - 1].value === 'D' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'B' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'B' && this.selections[i - 1].value === 'F' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'B' && this.selections[i - 1].value === 'G' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'B' && this.selections[i - 1].value === 'H' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'C' && this.selections[i - 1].value === 'D' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'C' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'C' && this.selections[i - 1].value === 'F' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'C' && this.selections[i - 1].value === 'G' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'C' && this.selections[i - 1].value === 'H' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'D' && this.selections[i - 1].value === 'B' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'D' && this.selections[i - 1].value === 'C' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'E' && this.selections[i - 1].value === 'B' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'E' && this.selections[i - 1].value === 'C' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'F' && this.selections[i - 1].value === 'B' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'F' && this.selections[i - 1].value === 'C' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'G' && this.selections[i - 1].value === 'B' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'G' && this.selections[i - 1].value === 'C' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'H' && this.selections[i - 1].value === 'B' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'H' && this.selections[i - 1].value === 'C' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].connection = true
                    this.selections[i - 1].connection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'D' && this.selections[i - 1].value === 'D' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'D' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'D' && this.selections[i - 1].value === 'F' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'D' && this.selections[i - 1].value === 'G' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'D' && this.selections[i - 1].value === 'H' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'E' && this.selections[i - 1].value === 'D' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'E' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'E' && this.selections[i - 1].value === 'F' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'E' && this.selections[i - 1].value === 'G' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'E' && this.selections[i - 1].value === 'H' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'F' && this.selections[i - 1].value === 'D' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'F' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'F' && this.selections[i - 1].value === 'F' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'F' && this.selections[i - 1].value === 'G' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'G' && this.selections[i - 1].value === 'D' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'G' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'G' && this.selections[i - 1].value === 'F' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'G' && this.selections[i - 1].value === 'G' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'G' && this.selections[i - 1].value === 'H' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'H' && this.selections[i - 1].value === 'D' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'H' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                } 
                if (this.selections[i].value === 'H' && this.selections[i - 1].value === 'F' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'H' && this.selections[i - 1].value === 'G' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
                if (this.selections[i].value === 'H' && this.selections[i - 1].value === 'E' && this.selections[i].group !== 'Group I' && this.selections[i-1].group !== 'Group I' && this.selections[i].group === this.selections[i-1].group) {
                    console.log('connection function running')
                    this.selections[i].bigConnection = true
                    this.selections[i - 1].bigConnection = false
                    this.complete = true
                    
                }
            }
        }
    },
//+ 

    computed: {
        getFreshData: function(event) {
            $.get('/select', function(data) {
                mainVm.selections = data
            })
        },

        groupOneRequirement: function() {
            for (var i = 0; i < this.selections.length; i++) {
                if (this.selections[i].group === 'Group I') {
                    groupICompleted = true
                    this.floor.group1.groupPoints = .5
                    return true
                }
            }
            return false
        },
//+
        groupTwoRequirement: function() {
            for (var i = 0; i < this.selections.length; i++) {
                if (this.selections[i].group === 'Group II') {
                    groupIICompleted = true
                    this.floor.group2.groupPoints = .5
                    return true
                }
            }
            return false
        },
//+
        groupThreeRequirement: function() {
            for (var i = 0; i < this.selections.length; i++) {
                if (this.selections[i].group === 'Group III') {
                    groupIIICompleted = true
                    this.floor.group3.groupPoints = .5
                    return true
                }
            }
            return false
        },
        groupFourRequirement: function() {
            if (this.selections[9] && this.selections[9].groupIV === true) {
                console.log('group IV requirement true')
                return true
            }
            return false
        },
//+
        doubleRequirement: function() {
            for (var i = 0; i < this.selections.length; i++) {
                if (this.selections[i].double === true) {
                    return true
                }
            }
            this.deduction = -0.3
            return false
        },
    }
})