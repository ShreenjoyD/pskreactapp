import "./../styles/Motorsports.css";
import msimg2 from "./../images/motorsports-two.jpg";

function Motorb2() {
    return (
        <div className="msb2">
            <p className="msb2p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <div className="msb2div"><img src={msimg2} alt="msig2"/></div>
        </div>
    );
}

export default Motorb2;