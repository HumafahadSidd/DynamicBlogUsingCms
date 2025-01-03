import CommentSection from '@/components/commentsection'
import React from 'react'
import Image from 'next/image'
export default function FirstPost() {
  return (
    <div className='ml-6 pt-4 rounded-md justify-between border-2 text-2xl font-black shadow'>
      <h1 className='text-center text-4xl text-purple-400 mb-2 shadow-md border'> The Renault Clio</h1>
     
     <Image src='/Rectangle 17.png' alt='car pink' width={1000} height={300} />
     
     <p className='mt-4 text-center'> The Renault Clio is the best-selling vehicle in Bosnia & Herzegovina in November.

According to data by CE Auto, the Bosnian new car market drops -8.2% year-on-year in November to 901 sales, bringing the year-to-date tally up just 0.4% to 10,967. The Renault Clio (+51.4%) signs its second victory of the year after last April and advances to #4 year-to-date as a result (vs. #7 over the Full Year 2023). The rest of the Top 4 is monopolised by Skoda with the Fabia (+117.4%), Octavia (-19.5%) and Kamiq in tow. The VW Caddy (#6) and Opel Movano (#8) stay inside the Top 10.

Previous month: Bosnia & Herzegovina October 2024: Market down, VW Caddy and Opel Movano up

One year ago: Bosnia & Herzegovina November 2023: Market up 44%

Full November 2024 Top 10 models ranking below.</p>
Bosnia & Herzegovina November 2024 – models:
<ul className='text-gray-500 mt-4 text-balance'>

<li> Pos	Model	Nov-24	%	/23	Oct	2024	%	/23	Pos	FY23</li>
<li>1	Renault Clio	53	5.9%	+ 51.4%	9	351	3.2%	+ 42.1%	4	7</li>
<li>2	Skoda Fabia	50	5.5%	+ 117.4%	2	430	3.9%	+ 23.2%	2	2</li>
<li>3	Skoda Octavia	33	3.7%	– 19.5%	1	760	6.9%	– 8.8%	1	1</li>
<li>4	Skoda Kamiq	30	3.3%	n/a	5	n/a	n/a	n/a	n/a	n/a</li>
<li>5	Hyundai Tucson	28	3.1%	– 26.3%	n/a	326	3.0%	– 14.2%	5	3</li>
<li>6	VW Caddy	27	3.0%	n/a	3	250	2.3%	+ 390.2%	10	n/a</li>
<li>7	Dacia Duster	26	2.9%	+ 18.2%	8	303	2.8%	+ 26.3%	7	4</li>
<li>8	Opel Movano	22	2.4%	n/a	4	n/a	n/a	n/a	n/a	n/a</li>
<li>9	Kia Sportage	16	1.8%	– 38.5%	7	299	2.7%	+ 8.3%	9	5</li>
<li>9	Toyota Corolla	16	1.8%	– 56.8%	6	n/a	n/a	n/a	n/a	6</li>
<li>9	Toyota Yaris Cross	16	1.8%	– 44.8%	10	367	3.3%	+ 62.4%	3	8</li>
<li>n/a	VW Golf	14	1.6%	– 50.0%	n/a	323	2.9%	+ 41.0%	6	10</li>
<li>n/a	Skoda Scala	7	0.8%	– 36.4%	n/a	300	2.7%	+ 23.5%	8	9</li>
<li>: CE Auto</li>
</ul>
<h2 className='text-gray-500 mt-4 text-bold'>Leave A Reply Here</h2>
<CommentSection />
  
    </div>
  )
}
