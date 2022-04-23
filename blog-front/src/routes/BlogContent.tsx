// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";


function BlogContent() {  
  let {blogpostid} = useParams();
  return (
    <div className="w-[100%] flex flex-col items-center">
      <p className="text-5xl">
        <b>Lorem Ipsum </b>
      </p>
      <p>{blogpostid} 3/6/2022</p>
      {/* <p>blog content {blogpostid}</p> */}
      <img
        className="w-[50%] m-7"
        src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
      />

      <div className="w-[80%] text-left">
        
        <p>
          &emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec ornare massa vel est facilisis, a mollis odio posuere. Quisque
          quis porta augue. Maecenas gravida mattis euismod. Aenean ullamcorper,
          lectus vestibulum convallis ultrices, magna enim congue mi, ac cursus
          est ex id nulla. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vivamus in ultrices erat.
          Nullam egestas pharetra ligula, a tincidunt magna maximus quis.
          Vivamus sed lacus arcu. Aliquam erat volutpat. Nunc bibendum ipsum a
          lorem volutpat, blandit ultrices sapien blandit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum a augue nec diam mollis
          eleifend. Donec turpis leo, fringilla vel lorem vitae, molestie
          tincidunt felis. Aliquam lobortis lacus egestas, sodales turpis vel,
          molestie arcu. Nullam aliquam odio mi. Aenean pretium ex mi.
          Suspendisse sit amet lacinia sem, tempus consequat justo. Donec
          commodo pharetra tincidunt. Mauris fermentum, sem eget volutpat
          mollis, metus dolor vehicula nisi, eget bibendum urna turpis vel ex.
          Etiam a ultrices felis. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Integer ultrices dapibus dolor, et
          pharetra neque. Aliquam malesuada diam augue, quis tristique eros
          vulputate et. Mauris placerat purus id lectus lacinia, non finibus
          dolor vehicula. Etiam eu vehicula purus, quis laoreet nisi. Donec
          ornare lorem vel diam faucibus, nec blandit diam pretium. Curabitur id
          dapibus lectus. Aliquam sed arcu sem. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Nam
          maximus massa id posuere hendrerit. Curabitur porttitor ipsum ac
          molestie lobortis. Sed vestibulum sem nulla, at laoreet leo tincidunt
          sed. Vestibulum urna quam, dictum sed dictum luctus, blandit eget
          tortor. Pellentesque scelerisque rutrum lorem, ut placerat lorem
          tempor sit amet. Aliquam auctor leo ut augue pretium, in fermentum
          ipsum aliquet. Praesent volutpat vel arcu a luctus. Duis non sapien
          vitae nunc faucibus efficitur a eget lorem. Maecenas quis mauris non
          dolor feugiat laoreet non non risus. Nam eget dolor non felis rutrum
          rutrum sed a massa. Nulla at tortor ut nisl sagittis mattis eu a
          nulla. Aliquam erat volutpat. Phasellus vel semper sem. Suspendisse
          tincidunt sagittis arcu sit amet interdum. Integer tempus massa quis
          sem elementum, sit amet fringilla dui imperdiet. Aliquam volutpat
          risus non ligula dictum, eu efficitur arcu finibus. Morbi rhoncus dui
          ac mattis tempor. Suspendisse nec cursus tellus. Curabitur pharetra
          eleifend arcu, non posuere odio hendrerit a. Ut varius massa vel massa
          blandit luctus. Proin semper, dui at imperdiet placerat, lorem neque
          finibus sapien, non rhoncus tellus nibh ut odio. Morbi consequat sem
          ante, non varius neque finibus in. Quisque sed porttitor nisl. Donec
          sed viverra augue, non interdum nunc. Nulla volutpat lectus a
          fringilla interdum. Nulla facilisi. Suspendisse vestibulum augue nec
          facilisis facilisis. Vestibulum quis odio volutpat, laoreet erat nec,
          bibendum risus.
        </p>
        <p>
          <br />
        </p>
        {/* <p className="text-align: justify;">&nbsp;hows it going</p> */}
      </div>
    </div>
  );
}

export default BlogContent;
