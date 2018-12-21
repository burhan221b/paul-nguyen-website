function createNode(el) {
    return document.createElement(el);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('reviewers');
const url = 'https://api.yelp.com/v3/businesses/mathilda-valero-station-auto-services-sunnyvale/reviews';

fetch(url).then(resp => resp.json()).then(data => {
    let reviewers = data.reviews;
    return reviewers.map((review) => {
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');
        img.src = review.user.imgage_url;
        span.innerHTML = `${review.user.name} wrote "${review.text}" and gave it ${review.rating} out of 5`;
    });

    append(li, img);
    append(li, span);
    append(ul, li);

}).catch((err) => {
    console.log(JSON.stringify(err));
});