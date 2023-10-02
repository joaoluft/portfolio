$(document).ready(function () {

    // Scroll indicator
    const scrollFunc = (height) => {
        let scrollCalc = (($("body").scrollTop() || $(document).scrollTop()) / ($(document).height() - height)) * 100;
        $(".scrollIndicator").css('width', `${scrollCalc}%`);
    };

    $(window).scroll(function () {
        scrollFunc($(window).height());
    });

    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight - 300) {
                    $(".scrollBottomIndicator").hide();
                    $(".scrollTopIndicator").show();
                } else {
                    $(".scrollTopIndicator").hide();
                    $(".scrollBottomIndicator").show();
                }
            });
    } else {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight - 300) {
                $(".scrollBottomIndicator").hide();
                $(".scrollTopIndicator").show();
            } else {
                $(".scrollTopIndicator").hide();
                $(".scrollBottomIndicator").show();
            }
        });
    }

    $(document).on("click", ".scrollBottomIndicator", function () {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    $(document).on("click", ".scrollTopIndicator", function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    // Typing effect
    let i = 0; // Contador
    const content = "João Luft"; // Conteúdo

    const typingEffect = () => {
        if (i < content.length) {
            $("#typing").append(content.charAt(i));
            i++;
            setTimeout(typingEffect, 300);
        }
    }

    // Profile data
    const codingSkills = [
        {
            "name": "HTML5",
            "icon": "./assets/images/coding-skills/html5.webp"
        },

        {
            "name": "CSS3",
            "icon": "./assets/images/coding-skills/css3.webp"
        },

        {
            "name": "Bootstrap",
            "icon": "./assets/images/coding-skills/bootstrap.webp"
        },

        {
            "name": "Tailwind",
            "icon": "./assets/images/coding-skills/tailwind.webp"
        },

        {
            "name": "Javascript",
            "icon": "./assets/images/coding-skills/javascript.webp"
        },
        {
            "name": "jQuery",
            "icon": "./assets/images/coding-skills/jquery.webp"
        },

        {
            "name": "React.JS",
            "icon": "./assets/images/coding-skills/react.webp"
        },

        {
            "name": "Node.JS",
            "icon": "./assets/images/coding-skills/node.webp"
        },

        {
            "name": "PHP",
            "icon": "./assets/images/coding-skills/php.webp"
        },

        {
            "name": "MySQL",
            "icon": "./assets/images/coding-skills/mysql.webp"
        }
    ];

    const softSkills = [
        {
            "name": "Resiliência",
            "icon": "./assets/images/soft-skills/resiliencia.webp"
        },

        {
            "name": "Colaboração",
            "icon": "./assets/images/soft-skills/colaboracao.webp"
        },

        {
            "name": "Flexibilidade",
            "icon": "./assets/images/soft-skills/flexibilidade.webp"
        },

        {
            "name": "Ética",
            "icon": "./assets/images/soft-skills/etica.webp"
        },

        {
            "name": "Criatividade",
            "icon": "./assets/images/soft-skills/criatividade.webp"
        }
    ];

    const projectsList = [
        {
            "name": "odougtatua.com",
            "thumbnail": "./assets/images/projects/odougtatua.webp",
            "index": "odougtatua"
        },

        {
            "name": "Tech Boost",
            "thumbnail": "./assets/images/projects/techboost.webp",
            "index": "techboost"
        },

        {
            "name": "Findpetz",
            "thumbnail": "./assets/images/projects/findpetz.webp",
            "index": "findpetz"
        },

        {
            "name": "Suply Store",
            "thumbnail": "./assets/images/projects/suplystore.webp",
            "index": "suplystore"
        }
    ];

    const loadCodingSkills = (skills) => {
        skills.forEach((v, k) => {
            $(".codingSkills").append(`
            <div class="p-4 bg-gray-300 rounded-xl">
                <h1 class="text-center pb-2">${v.name}</h1>
                <div class="flex justify-center items-center">
                    <img class="w-20" src="${v.icon}" alt="${v.name}">
                </div>
            </div>`);
        });
    };

    const loadSoftSkills = (skills) => {
        skills.forEach((v, k) => {
            $(".softSkills").append(`
            <div class="p-4 bg-gray-300 rounded-xl">
                <h1 class="text-center pb-2">${v.name}</h1>
                <div class="flex justify-center items-center">
                    <img class="w-20" src="${v.icon}" alt="${v.name}">
                </div>
            </div>`);
        });
    };

    const loadCurrentProjects = (projects) => {
        projects.forEach((v, k) => {
            $("#carousel").append(`
            <a target="_blank" href="./assets/documents/projects/${v.index}.pdf" class="relative grid aspect-video Card" id="card-${k}">
                <div class="absolute bottom-0 left-0 right-0 top-0 grid place-items-center z-30">
                <div>
                    <h1 class="text-white text-xl md:text-6xl font-bold">${v.name}</h1>
                    <p class="pt-3 text-xs md:text-sm text-gray-300 text-center underline">Clique aqui para ver mais...</p>
                    </div>
                </div>
                <div class="relative rounded-lg aspect-auto overflow-hidden">
                    <div class="bg-black/50 w-full h-full z-20 absolute"></div>
                    <img class="object-cover w-full h-full z-10" src="${v.thumbnail}" alt="Projeto - ${v.name}">
                </div>
            </a>`);

            $(".Dots").append(`<a href="#card-${k}" class="Dot transition-colors duration-150 bg-blue-700 hover:bg-blue-400 px-2.5 rounded-full" tabindex="-1"></a>`);

        });
    };

    AOS.init(); // AOS animations
    typingEffect(); // Typing Effect
    loadCurrentProjects(projectsList); // Load projects
    loadCodingSkills(codingSkills); // Load coding skills
    loadSoftSkills(softSkills); // Load soft skills

    (() => {
        const isReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        document.querySelectorAll('.projectsCarousel').forEach(($carousel) => {
            $carousel.scrollLeft = 0;

            const $pagination = document.getElementById("Pagination");

            const scrollTo = ($card) => {
                let offset = getOffset($card);
                const left = document.dir === 'rtl' ? -offset : offset;
                const behavior = isReducedMotion ? 'auto' : 'smooth';
                $carousel.scrollTo({ left, behavior });
            };

            const getOffset = ($el) => {
                let offset = $el.offsetLeft;
                if (document.dir === 'rtl') {
                    offset = $carousel.offsetWidth - (offset + $el.offsetWidth);
                }
                return offset;
            };

            $pagination.addEventListener('click', (ev) => {
                if (ev.target.classList.contains('Dot')) {
                    ev.preventDefault();
                    const $card = document.querySelector(new URL(ev.target.href).hash);
                    if ($card) scrollTo($card);
                }
            });
        });
    })();
});