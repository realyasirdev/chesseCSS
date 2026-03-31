export default function Header(){
    return(
        <>
         <div>
    <div class="board-wrap">
      <div class="grid">
        <div></div>
        <div class="coords top">
          <span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span>
        </div>
        <div></div>

        <div class="coords left">
          <span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span>
        </div>

        <div class="board" aria-label="Chess board">
        
          <div class="sq dark"><span class="p">♜</span></div>
          <div class="sq light"><span class="p">♞</span></div>
          <div class="sq dark"><span class="p">♝</span></div>
          <div class="sq light"><span class="p">♛</span></div>
          <div class="sq dark"><span class="p">♚</span></div>
          <div class="sq light"><span class="p">♝</span></div>
          <div class="sq dark"><span class="p">♞</span></div>
          <div class="sq light"><span class="p">♜</span></div>

          
          <div class="sq light"><span class="p">♟</span></div>
          <div class="sq dark"><span class="p">♟</span></div>
          <div class="sq light"><span class="p">♟</span></div>
          <div class="sq dark"><span class="p">♟</span></div>
          <div class="sq light"><span class="p">♟</span></div>
          <div class="sq dark"><span class="p">♟</span></div>
          <div class="sq light"><span class="p">♟</span></div>
          <div class="sq dark"><span class="p">♟</span></div>

        
          <div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div>
          <div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div>

        
          <div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div>
          <div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div>

         
          <div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div>
          <div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div>

         
          <div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div>
          <div class="sq light"></div><div class="sq dark"></div><div class="sq light"></div><div class="sq dark"></div>

          
          <div class="sq dark"><span class="p">♙</span></div>
          <div class="sq light"><span class="p">♙</span></div>
          <div class="sq dark"><span class="p">♙</span></div>
          <div class="sq light"><span class="p">♙</span></div>
          <div class="sq dark"><span class="p">♙</span></div>
          <div class="sq light"><span class="p">♙</span></div>
          <div class="sq dark"><span class="p">♙</span></div>
          <div class="sq light"><span class="p">♙</span></div>

         
          <div class="sq light"><span class="p">♖</span></div>
          <div class="sq dark"><span class="p">♘</span></div>
          <div class="sq light"><span class="p">♗</span></div>
          <div class="sq dark"><span class="p">♕</span></div>
          <div class="sq light"><span class="p">♔</span></div>
          <div class="sq dark"><span class="p">♗</span></div>
          <div class="sq light"><span class="p">♘</span></div>
          <div class="sq dark"><span class="p">♖</span></div>
        </div>

        <div class="coords right">
          <span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span>
        </div>

        <div></div>
        <div class="coords bottom">
          <span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
        </>
    );
}