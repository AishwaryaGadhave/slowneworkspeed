import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="App">
    <div className="container mt-5 d-flex justify-content-center ">
    <div className="card p-1 mt-3 cardmain">

    <div>
        <form className="search-form">
          <input type="search"  placeholder="Search Groww" className="search-input" />
          <button type="submit" className="search-button">
          <img className="img1"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxETEBEREhEREREQEA4OEREPDxEQEBAPFhMYGBYSFhQaHysiGhwoHRYWIzQjKCwuMTExGSE3PDcwOyswMS4BCwsLDw4PHRERHTApIh8uMDAyLjIwMDAwMDAwMDAwMC4wMC4wMDAuLjAwMDAwMDAwMC4wMDAwMDAwMDAwOy4wMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EADYQAAIBAgQEAwQKAgMAAAAAAAABAgMRBAUhQQYSMVFhcYEiMpGhBxMjQlJicrHB0RVDFDPh/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEDAgQGBQf/xAAzEQACAQMBBQYFAwUBAAAAAAAAAQIDBBFBBRIhMVEyYXGBsdETkaHh8CLB8QYVI1JiQv/aAAwDAQACEQMRAD8A9mAAAAAAAAABROaSbbSS1bbskcznXG1GleNL7Wa0uvdXruW0aFStLdgskSkorLOmnNJXbSXduyNPmXFWGo3TnzyX3Ya/M89zTiLEV2+eo1F/djpE1jZ7FHY651ZeS9yiVfodrjvpDf8AqpW/Xr+xpsTxhi5vSo4fp0NGD0qdlQhyivX1KnUk9TLr5tXnrKpKXmzGnWk+rbKQbChFckYZKoVZLo7F+jmdaLvGpJeTMYEuKfNE5Nzh+LMXH/bKXhLU3OB+kGa/7aakvyaM40GvUsqE+1BehkpyWp6jlvGGFq2Tk6cntP8As3dKrGSvGSku6dzxMzstzqvQadOpJJfdbvF+h51bY8XxpSx3P3LI13qexA4/JeO4TtGuuSXTnXut/wAHV0K0ZxUoSUovVOLujxq1vUovE1j0L4yUuRdABSZAAAAAAAAAAAAAAAA12cZ1Rw8OapLXaK95mFxNxLTw0XFNSqtaR7eLPNMfjqlabnUk5Sfd9PI9Oy2fKt+ufCP1ZTUq7vBGzz7iitiG1fkp7Qi9vFmlAOjp04047sFhGs228sAAzIAAAAAAAAAAAAAAABs8l4grYeS5JNx3g3o1/BrAYzhGa3ZLKCeD1jIeIaWJjo+WaXtQb19DcHiWHxE6clOEnGS1TTsei8KcVxrpU6rUaqVk30n/AOnO3uzXSzOnxj01X2NqnVzwZ1AAPKLgAAAAAAAAAaDiviGOGptRadWStFdvFmdn2aww9GVSXXpFbuR5PmGNnWqSqTd5Sbfl4Hp7OsvjS359lfUpq1N3gijE4iVSbnNuUpO7bLYB0yWDVAAAAAAAAAAAAAAAAAAAAAAAABNObi007NO6a7kAA9H4M4mVeKpVGlVirJv76/s6k8RoVpQkpRdpRaaa7nqnCueRxNJXf2kUlNfyc5tKy+E/iw7L59xtUqmeDN0ADyS4AAAFE5pJtuySbbeyKzlvpAzf6qj9VF2nV0dto7ltCjKtUUI6kSkorLOS4vzp4is7P7OF4wW3izSgHY06cacVCPJGi3l5YABmQAAAAAAAAAAAAAAAAAAAAAAAAAAADYcP5pLD1o1E9L2ku8dzXGyyvLXK056R2XcpuJ04038Tl6lNe5hbw+JN4S+r6I9ZwuIjOEZxd1JJovHPcJ4zR0nt7vzdjoTjpLDwbdldxuqEasdea6PVAAGJtlFSaSbfRJt+R5LxPmLr4ipO94p8sf0o9C4xx/1OFm07Sn7EfXqeVNnu7Ho8JVX4L9zXry/8gAHuGuAAAAAAAAAAAAAAAAAAAAAAAAAAAAQbbKssvac1p1Ue/TVlVatCjHel/Jr3NzTt6e/Uf3fRFOVZZzWnNabJ7+JuYqxUkQc5cXE60t6XkuhxN5eVLqpvz8lol+a6l7BV3CpGa219DuaNVSipLo1c8/lKx1XCuN56Ti+sH8m2alRcMnt/03cuNWVF8pLK8V9vQ3QAKTszhPpOxmtKj2+0+OhxRvOOMQ54yovwPkNGdfZU9yhBd2fmaVR5kwADaMAAAAAAAAAAAAAAAAAAAAAAAAASEbbK8s6TmteqRVXrxox3pfya11dU7anvz8lq/D84FOVZZ0nNeUf7ublEA5uvXnWlvS/g4m7u6lzPfn5LReH5xBE5WEpWMeUrlJrxjkTlc3XB+I5azj+P2fgmaQysprctaD8bGMllG9ZVfg3EJ9Gvb9z0MAGtk+lHjWc1ufEVJfik2YhVXleTfdlJ3EFiKXQ85gAGQAAABBXTpOTtFNvw1NtgcnS9qpq+2y+KKK9xTorM35amrdXlK2jmo/BavyNMSb3EZPB6x9l+n9GtxGV1Y7cy/JdswpXtGpyeH0fAqt9p21fgpYfR8PsYgDjbroDbN8AAgAAAAAAAJCKvourN3lWW8vtzXtbLt0Ka9xChHel5Lqat5eU7Wnvz8lq/zrp8inK8stac+uy7fE2gBzdatOtLekcTdXVS5qb9T5aLuQInOwnOxjylcqKIxyJSuQAQWginWtNW2v8AuWqlTZFEXqiC2EeOTrf8uwc7/wAnxBhunu/3Of8Asc5WjaTXZlJlZtSca9SL6qTRinZxeUmdCwAV0aEpu0Vd/IltJZZi2ksvki2ZuBy2dTV+zHv0b8jYYHKYx1n7Uvil8jYpHk3G0kv00vn7HPXu21HMLfj/ANey/d/Is4XCQpq0V66XZeAPIlJyeZPLObnUlUk5SeW9WALgxMCzWwkJ+9FP0RrsRkm8Jek3p8kbcF9K5q0uzLy5o3Le/uKHYlw6Pivkzl8Rg6kPei/NJssnXNGJiMspz2s+8bI9KltRcqi817Ht2+34vhWjjvXsc6DY4jJprWLUl21/owKlGUfeTXmj0qdanV7Dye3QuqNdZpyT9flzKQlfRatkwi20lq30N5lmXKC5payfy6GFxcRoRzLnoupVe3tO1hvS5vkuv27ynLMtULTlrLZfhNkAc3Vqyqy3pHE3FzUuKjqVHx9O5dwKak7CpOxjt3KyqMckydyAQQWklmpU2RFSpctkFkY9QVRWpSVU37UVu7L5gzSyZP8Axgbr/Gz7Ax3kex/bZ9Dm+NKHLjKvaUuZGnR2v0hZXKdWnUiveXI3tdbmowOVxhq/al37HQ0r6nC3g3xeOS7uHkexf39G0bUnl9Fz8+hr8DlUp6y9mPbdm6w+HjBWirfuXAeXcXVSu/1cumhx95tCtdP9Twui5fcAESkkaxokludXsW51GykFih1JciY1GikEGeC9Gt3LikjFCZJg4IygWI1mXI1UDFxaKympSjLqovzVyq4JXDiQm08ox6OApwfNFa+aZkAEynKbzJ5M6lWdR7022+8FNSpbzIqVLeZYbMSIxyGwCGyCwMs1Kl/IVJ38i2QWRj1ABTUnYGaWROdi7lNJzr014p/BmI2b/gbC8+IUtoJt+qIfI27Sj8StCHVo77kXZEFwFB9A4Gs4gw3PRdlrHVHHnoE43VnurHE5lhXTqSj2d0XU3ocf/UtricK614PxXL6GKGROokWJzbLDmFFsrnW7FpsAgsSSABEpWBJILLqvYmNUZMt1l0EJkgxAABJKk0Vxrdy2AYtJmTGaZTUqWLAJMdxBsAhsgzDZZqTuROdyggsjHHMAFFSdgZpZJqTsWWwwQWJYIO74EwPLSlUas6jS9Fc4rB0HUqRglduSR6ngcOqdOFNdIxSMZ8j3dh0N6s6r5RX1f2MgAFR1QNBxZg24KpFax0fezsb8t1aaknFq6as/IlPDya15bRuaMqUtfo9GebAzs6wDo1HG3svVPujBNhPJ85qU5UpuE+aeGAUykkWZ1GxkhLJcnV7Fpu5SCDNJIAAEhFyNVlsANZMiNRFRilSk0DFwMkFmNbuXFNMkwaaKgCJOwIDdixOdxOdyggsjHAAKalTZAzSyRUqFogkgsSwCAZWWYKVarGnFdXr4LdgyjFyaiubOi4Dyu8nWktI6Qv311R2pj4HCxp0404qyirevcyClvLO6srZW9FU9dfH84AAEG2AAAa/OcuVanb7y1i/4OBxV4ScGrOLadz040HE2RqrFzgl9YlqvxIzjLB4O2NmfHXxqa/Uua6r3WnyOIbKSqUWm01ZrRplJaciAG7FqdTsCUslxzRKZjEpgz3DIBajVZXGogYuLKgADEAAArjUaIlK5SAMAAoqVNkCUsipU2RZBJBalgABK4BMYttJat6JHoXCmSKhT55L7Sa1/Kuxr+EeHrJVqsdesIvbxZ1pXKWh1GyNnuH+eouL5Lp3+PoAAYHvAAAAAAAAAGg4h4ejVTnBWqbraRw2IvBuLT5lo0z1g1OeZDTrxbtyz2kl+6M4yweHtHY6rN1aXCWq0fs/U81lK5Bn5plFahJqcdNmtYv1MAsOXnCUJbslhrQkAAxBBIAJUmVxq9y0SA0mX1NEmMVxqMkwcS8CiNUipU7AjdZNSpsiyCSCxLAIBlYDLqtaSjTi349EvNgyjFyeIrLZjxi27JXb0SR2XDHC6XLVrLXrGD28WZ+QcNU6CUpWnU77R8jfFcpdDptn7I3GqlfnpHRePf6EEgGB7wAAAAAAAAAAAAAABZxFCM4uM4qSelmctm/Bid5UHbfkfT0Z14JTwa1zaUbhYqLPfqvM8nxeAq0pctSDi131XxMY9cr4eE1acVJeJo8w4PoTu4N032WsfgZqfU5+42HUjxpPPc+D9jgAdFi+DK8fcaqeVompxGUV4e9TfpqZZR5VS0r0u3Bry9jDBXKhNdY284spcX2JKMEEEqLK40ZPpG/kmBgoIMuhldafSnL4NG1wnB+Il7yUF3bTIyi6na1qnYg35HPl7DYWpUajCMm32R2uA4MpRs6knNrZLlRvsNg6dNWhCMV4IjfR6tvsOtLjVaivm/Y5LKOC5O0q75V15F18mdbg8HTpxUYRUUvj8TIBW22e/bWVG2X+Nceuv54AAEG2AAAAAAAAAAAAAAAAAAAAAAAACGACUcnn/AL3xOaxm4BbHkcntHtyKMKdDkvvIAMqsO0jsYdF6FYBUdgAAAAAAAAAAAAAAAAAAf//Z"
          alt="car" width={20} height={20}
         />
          </button>
          <div className="search-option">
            <div>
              <input name="type" type="radio" defaultValue="type-users" id="type-users" />
              <label htmlFor="type-users">
              <img className="img1"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxETEBEREhEREREQEA4OEREPDxEQEBAPFhMYGBYSFhQaHysiGhwoHRYWIzQjKCwuMTExGSE3PDcwOyswMS4BCwsLDw4PHRERHTApIh8uMDAyLjIwMDAwMDAwMDAwMC4wMC4wMDAuLjAwMDAwMDAwMC4wMDAwMDAwMDAwOy4wMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EADYQAAIBAgQEAwQKAgMAAAAAAAABAgMRBAUhQQYSMVFhcYEiMpGhBxMjQlJicrHB0RVDFDPh/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEDAgQGBQf/xAAzEQACAQMBBQYFAwUBAAAAAAAAAQIDBBFBBRIhMVEyYXGBsdETkaHh8CLB8QYVI1JiQv/aAAwDAQACEQMRAD8A9mAAAAAAAAABROaSbbSS1bbskcznXG1GleNL7Wa0uvdXruW0aFStLdgskSkorLOmnNJXbSXduyNPmXFWGo3TnzyX3Ya/M89zTiLEV2+eo1F/djpE1jZ7FHY651ZeS9yiVfodrjvpDf8AqpW/Xr+xpsTxhi5vSo4fp0NGD0qdlQhyivX1KnUk9TLr5tXnrKpKXmzGnWk+rbKQbChFckYZKoVZLo7F+jmdaLvGpJeTMYEuKfNE5Nzh+LMXH/bKXhLU3OB+kGa/7aakvyaM40GvUsqE+1BehkpyWp6jlvGGFq2Tk6cntP8As3dKrGSvGSku6dzxMzstzqvQadOpJJfdbvF+h51bY8XxpSx3P3LI13qexA4/JeO4TtGuuSXTnXut/wAHV0K0ZxUoSUovVOLujxq1vUovE1j0L4yUuRdABSZAAAAAAAAAAAAAAAA12cZ1Rw8OapLXaK95mFxNxLTw0XFNSqtaR7eLPNMfjqlabnUk5Sfd9PI9Oy2fKt+ufCP1ZTUq7vBGzz7iitiG1fkp7Qi9vFmlAOjp04047sFhGs228sAAzIAAAAAAAAAAAAAAABs8l4grYeS5JNx3g3o1/BrAYzhGa3ZLKCeD1jIeIaWJjo+WaXtQb19DcHiWHxE6clOEnGS1TTsei8KcVxrpU6rUaqVk30n/AOnO3uzXSzOnxj01X2NqnVzwZ1AAPKLgAAAAAAAAAaDiviGOGptRadWStFdvFmdn2aww9GVSXXpFbuR5PmGNnWqSqTd5Sbfl4Hp7OsvjS359lfUpq1N3gijE4iVSbnNuUpO7bLYB0yWDVAAAAAAAAAAAAAAAAAAAAAAAABNObi007NO6a7kAA9H4M4mVeKpVGlVirJv76/s6k8RoVpQkpRdpRaaa7nqnCueRxNJXf2kUlNfyc5tKy+E/iw7L59xtUqmeDN0ADyS4AAAFE5pJtuySbbeyKzlvpAzf6qj9VF2nV0dto7ltCjKtUUI6kSkorLOS4vzp4is7P7OF4wW3izSgHY06cacVCPJGi3l5YABmQAAAAAAAAAAAAAAAAAAAAAAAAAAADYcP5pLD1o1E9L2ku8dzXGyyvLXK056R2XcpuJ04038Tl6lNe5hbw+JN4S+r6I9ZwuIjOEZxd1JJovHPcJ4zR0nt7vzdjoTjpLDwbdldxuqEasdea6PVAAGJtlFSaSbfRJt+R5LxPmLr4ipO94p8sf0o9C4xx/1OFm07Sn7EfXqeVNnu7Ho8JVX4L9zXry/8gAHuGuAAAAAAAAAAAAAAAAAAAAAAAAAAAAQbbKssvac1p1Ue/TVlVatCjHel/Jr3NzTt6e/Uf3fRFOVZZzWnNabJ7+JuYqxUkQc5cXE60t6XkuhxN5eVLqpvz8lol+a6l7BV3CpGa219DuaNVSipLo1c8/lKx1XCuN56Ti+sH8m2alRcMnt/03cuNWVF8pLK8V9vQ3QAKTszhPpOxmtKj2+0+OhxRvOOMQ54yovwPkNGdfZU9yhBd2fmaVR5kwADaMAAAAAAAAAAAAAAAAAAAAAAAAASEbbK8s6TmteqRVXrxox3pfya11dU7anvz8lq/D84FOVZZ0nNeUf7ublEA5uvXnWlvS/g4m7u6lzPfn5LReH5xBE5WEpWMeUrlJrxjkTlc3XB+I5azj+P2fgmaQysprctaD8bGMllG9ZVfg3EJ9Gvb9z0MAGtk+lHjWc1ufEVJfik2YhVXleTfdlJ3EFiKXQ85gAGQAAABBXTpOTtFNvw1NtgcnS9qpq+2y+KKK9xTorM35amrdXlK2jmo/BavyNMSb3EZPB6x9l+n9GtxGV1Y7cy/JdswpXtGpyeH0fAqt9p21fgpYfR8PsYgDjbroDbN8AAgAAAAAAAJCKvourN3lWW8vtzXtbLt0Ka9xChHel5Lqat5eU7Wnvz8lq/zrp8inK8stac+uy7fE2gBzdatOtLekcTdXVS5qb9T5aLuQInOwnOxjylcqKIxyJSuQAQWginWtNW2v8AuWqlTZFEXqiC2EeOTrf8uwc7/wAnxBhunu/3Of8Asc5WjaTXZlJlZtSca9SL6qTRinZxeUmdCwAV0aEpu0Vd/IltJZZi2ksvki2ZuBy2dTV+zHv0b8jYYHKYx1n7Uvil8jYpHk3G0kv00vn7HPXu21HMLfj/ANey/d/Is4XCQpq0V66XZeAPIlJyeZPLObnUlUk5SeW9WALgxMCzWwkJ+9FP0RrsRkm8Jek3p8kbcF9K5q0uzLy5o3Le/uKHYlw6Pivkzl8Rg6kPei/NJssnXNGJiMspz2s+8bI9KltRcqi817Ht2+34vhWjjvXsc6DY4jJprWLUl21/owKlGUfeTXmj0qdanV7Dye3QuqNdZpyT9flzKQlfRatkwi20lq30N5lmXKC5payfy6GFxcRoRzLnoupVe3tO1hvS5vkuv27ynLMtULTlrLZfhNkAc3Vqyqy3pHE3FzUuKjqVHx9O5dwKak7CpOxjt3KyqMckydyAQQWklmpU2RFSpctkFkY9QVRWpSVU37UVu7L5gzSyZP8Axgbr/Gz7Ax3kex/bZ9Dm+NKHLjKvaUuZGnR2v0hZXKdWnUiveXI3tdbmowOVxhq/al37HQ0r6nC3g3xeOS7uHkexf39G0bUnl9Fz8+hr8DlUp6y9mPbdm6w+HjBWirfuXAeXcXVSu/1cumhx95tCtdP9Twui5fcAESkkaxokludXsW51GykFih1JciY1GikEGeC9Gt3LikjFCZJg4IygWI1mXI1UDFxaKympSjLqovzVyq4JXDiQm08ox6OApwfNFa+aZkAEynKbzJ5M6lWdR7022+8FNSpbzIqVLeZYbMSIxyGwCGyCwMs1Kl/IVJ38i2QWRj1ABTUnYGaWROdi7lNJzr014p/BmI2b/gbC8+IUtoJt+qIfI27Sj8StCHVo77kXZEFwFB9A4Gs4gw3PRdlrHVHHnoE43VnurHE5lhXTqSj2d0XU3ocf/UtricK614PxXL6GKGROokWJzbLDmFFsrnW7FpsAgsSSABEpWBJILLqvYmNUZMt1l0EJkgxAABJKk0Vxrdy2AYtJmTGaZTUqWLAJMdxBsAhsgzDZZqTuROdyggsjHHMAFFSdgZpZJqTsWWwwQWJYIO74EwPLSlUas6jS9Fc4rB0HUqRglduSR6ngcOqdOFNdIxSMZ8j3dh0N6s6r5RX1f2MgAFR1QNBxZg24KpFax0fezsb8t1aaknFq6as/IlPDya15bRuaMqUtfo9GebAzs6wDo1HG3svVPujBNhPJ85qU5UpuE+aeGAUykkWZ1GxkhLJcnV7Fpu5SCDNJIAAEhFyNVlsANZMiNRFRilSk0DFwMkFmNbuXFNMkwaaKgCJOwIDdixOdxOdyggsjHAAKalTZAzSyRUqFogkgsSwCAZWWYKVarGnFdXr4LdgyjFyaiubOi4Dyu8nWktI6Qv311R2pj4HCxp0404qyirevcyClvLO6srZW9FU9dfH84AAEG2AAAa/OcuVanb7y1i/4OBxV4ScGrOLadz040HE2RqrFzgl9YlqvxIzjLB4O2NmfHXxqa/Uua6r3WnyOIbKSqUWm01ZrRplJaciAG7FqdTsCUslxzRKZjEpgz3DIBajVZXGogYuLKgADEAAArjUaIlK5SAMAAoqVNkCUsipU2RZBJBalgABK4BMYttJat6JHoXCmSKhT55L7Sa1/Kuxr+EeHrJVqsdesIvbxZ1pXKWh1GyNnuH+eouL5Lp3+PoAAYHvAAAAAAAAAGg4h4ejVTnBWqbraRw2IvBuLT5lo0z1g1OeZDTrxbtyz2kl+6M4yweHtHY6rN1aXCWq0fs/U81lK5Bn5plFahJqcdNmtYv1MAsOXnCUJbslhrQkAAxBBIAJUmVxq9y0SA0mX1NEmMVxqMkwcS8CiNUipU7AjdZNSpsiyCSCxLAIBlYDLqtaSjTi349EvNgyjFyeIrLZjxi27JXb0SR2XDHC6XLVrLXrGD28WZ+QcNU6CUpWnU77R8jfFcpdDptn7I3GqlfnpHRePf6EEgGB7wAAAAAAAAAAAAAABZxFCM4uM4qSelmctm/Bid5UHbfkfT0Z14JTwa1zaUbhYqLPfqvM8nxeAq0pctSDi131XxMY9cr4eE1acVJeJo8w4PoTu4N032WsfgZqfU5+42HUjxpPPc+D9jgAdFi+DK8fcaqeVompxGUV4e9TfpqZZR5VS0r0u3Bry9jDBXKhNdY284spcX2JKMEEEqLK40ZPpG/kmBgoIMuhldafSnL4NG1wnB+Il7yUF3bTIyi6na1qnYg35HPl7DYWpUajCMm32R2uA4MpRs6knNrZLlRvsNg6dNWhCMV4IjfR6tvsOtLjVaivm/Y5LKOC5O0q75V15F18mdbg8HTpxUYRUUvj8TIBW22e/bWVG2X+Nceuv54AAEG2AAAAAAAAAAAAAAAAAAAAAAAACGACUcnn/AL3xOaxm4BbHkcntHtyKMKdDkvvIAMqsO0jsYdF6FYBUdgAAAAAAAAAAAAAAAAAAf//Z"
          alt="car" width={20} height={20}
         /> 
             
              </label>
            </div>
           
          </div>
        </form>
       
      </div>

      <div className='d-flex mt-2 justify-content-evenly tabmain'>
      <div className=''>
      <p className='tab1'> Explore</p>
      </div>

      <div className=''>
      <p> Dashboard</p>
      </div>
      </div>


      <div className=' p-2'>
      <div className='d-flex justify-content-between' >
      <div><p>market indices</p>
      </div>

      <div>
      <button className='stockbutton'>All STOCKS
      </button>
      </div>
      </div>
      </div>

      <div>
      <Slider {...settings}>
      <div className="wrapper ">
        
      </div>
      <div className="wrapper ">
        
      </div>


      <div className="wrapper ">
        
      </div>
     
    </Slider>
      </div>

      <div className=' p-2'>
      <div className='d-flex justify-content-between' >
      <div><p>Top Gainers <span className='niftyclass'>NIFTY 100</span></p>
      </div>

      <div>
      <p className='seemore'>See more
      </p>
      </div>
      </div>
      </div>


      <div>
      <Slider {...settings}>
      <div className="wrapper ">
        
      </div>
      <div className="wrapper ">
        
      </div>


      <div className="wrapper ">
        
      </div>
     
    </Slider>
      </div>

      <div >
      <Slider {...settings}>
      <div id="lastcard">
      <i className="fa fa-bar-chart icon1" ></i>
        <span>F&O</span>
       </div>
      <div id="lastcard">
      <i className="fa fa-line-chart"></i>
      <span>Intraday</span>
      </div>


      <div id="lastcard">
      <i className="fa fa-bullhorn icon1" ></i>

      <p>Nft</p>
      </div>
     
    </Slider>
      </div>



    </div>
    </div>
    </div>
  );
}

export default App;
