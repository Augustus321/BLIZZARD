import { BASE_URL } from "./lib";

export function loaddingHome() {
    $.ajax({
        url: `${BASE_URL}/home/homepage?kind=homepages`,
        success(res) {
            console.log(res);
            let { images } = res;
            let homeHtmlStr = "";
            $.each(images, (_, obj) => {
                homeHtmlStr += `<li>
                    <a href="${obj.homelink}" style="background:url(${BASE_URL}/images/index/${obj.imgName}) no-repeat" class="second-homelink">
                        <p>${obj.hometext}</p>
                    </a>
                </li>`;
            });
            $(".second-list").html(homeHtmlStr);
        }
    })
}
