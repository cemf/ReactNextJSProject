import { getByText, render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { PostCardPropsMock as props } from "./mock";



describe("teste de <PostCard />",()=>{

    it('should render PostCard correctly', ()=>{

        
        render(<PostCard {...props} />);
        //snapshot  tira foto do componente e compara
        expect(screen.getByRole('img', {name: props.title })).toHaveAttribute('src',props.cover);

        expect(screen.getByRole('img', {name: /title/i }))
            .toHaveAttribute('src', props.cover);

        expect(screen.getByRole('heading',{name: /title 1/i })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();

    })

    it('should match snapshot', () => {
        const {container }=render(<PostCard {...props}/>)

        expect(container.firstChild).toMatchSnapshot();


    })
 
})