import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""

            />

            <div className="home__row">
                <Product
                    id="987654321"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at blandit lacus. Aliquam convallis orci eget mollis feugiat. Curabitur finibus erat nec orci hendrerit, ac."
                    price={400}
                    rating={4}
                    image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEBESEhMVFRUWEBgVFRgTFRUVGBYYFRgWFxYWFhcYHSggGBolHRcWIzEiJSkrLjAuFx81ODMtNygtLysBCgoKDg0OGxAQGysmICUtLS0tLS0tLS0uKy0vLS8tLy8tLS8tLS0tLS0vLS0vLS0tLS0tLS0tLS0tLS0tLy0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIDBAj/xABHEAACAQICBQgEDAMHBQEAAAABAgADBBEhBRIxQVEGBxMiYXGBkVKhscEUIzJCYnKSosLR4fAkgvEzQ2Nzg7LSFlNUZLMV/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAgUGAQf/xAA1EQEAAgECAwQJBAICAwEAAAAAAQIDBBEFITESQVFxEyJhkaGxwdHwIzKB4RRCBlIzYnIk/9oADAMBAAIRAxEAPwC8YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5NJ6UoW6a9eqlJeLsFx7BjtPYJ5MxHVnTHa87VjdBdK87lqmIt6VWudzH4lD4sNb7shnPWOjYY+FZrfu2j4o/V5x9J1s0Whbodh1Gqufq6xAbvwA7ZHOolex8Hp3zMvFV5V3h+Vc1WPHWCeQpBQB2HHvkU57Sv4+FYK9YdH/Ut3/5NX7ZmHpb+Kx/gaf/AKR7nsseXF9TP9uXHCoqsPcfXMoz3jvRZOFaa/8Art5JloPnHpOQtynRn01xZPEbV9Y7ZYpqYn93Jp9TwW9OeKd/Z3pxRqq6hkYMpGIKkEEcQRLMTu0tqzWdpjm5w8ICAgICAgICAgICAgICAgICAgIFectecZaJahZ6r1QcHqHNKZ3hR89vUO3MSvkz7cqtzouFWyRF8vKPDvn7Qqe/ualaoatZ2qOfnOcT3Dco7BgJUm0z1dBj09McbUjZ32lqoAdx2qp2Yek3HsG/acsj5MpIpvPJs7PRl3c4mhQqVB6QGCn+dsFPnFaWtziGOXU4MHK9oj2f11c6/I3SgGJtX8GpN6lcmZ+hv4K88U089Lx7p+yP3tGtRbVq03ptwqIyE92sM55NduqWuoi8b1mJ8nUtxMeyzjNL0UrqebJYyRKT8leVda1fqHWpk9emT1TxK+i3b5zPHlmnkqazQY9TXnynun7rm0Npalc0hVpHEHIg7VO9WG4zYVtFo3hyGo098F+xeHumSEgICAgICAgICAgICAgICAgIFcc53LA08bO3bByPjnU5opGSKdzEbTuB4nKrny7erDe8K4fF/wBbJHLujx9vkqgCVHSbO+1pAnWb5I47zuHdvP6w827oWlyO5CAhbi9XWJzSiwyGOxqo3t9HYN+ey1iwf7Xc/wAQ4tMfpaedo77fb79/zsRVAAAGAGQA3S25+Z3ZgdN3aU6qFKqK6narqGB8DPJiJ6sq3tSd6ztKueVXNVTYNUsT0bbeicko31GOaHsOI7pBfBHWrbabito9XNzjx7/7VRd2lSk7U6iMjqcGVhgQf3v3yrMbTtLe1tFo7VZ3hilWInkwlrkmEp5I8pntawdc1OAqJjk6/wDIbj7iZ7jvNJ3R6zS01WPbv7p8P6XnYXiVqaVabayOuKn8+B3Edk2MTExvDjMmO2O00t1h6J6wICAgICAgICAgICAgICAgaXlfpwWdpUrZF/kUgfnO3yfAZk9imR5b9iu65odLOpzRTu6z5fnLzUDWqM7M7kszMWYnaSTiSfGazffm7quOtYiIjaIcMIJqsLm05NirU6eoMaVFuoDserkS3aFy8dX0ZawY+1O89I+bQ8X1noqeip1t19lf7+XmtmXXLkBAQECM8tuSNK+pbkrqPi6mHjqPxQ+rHEdsWTHF49q7otbbT28az1j6x7VDXtk9Ko9KopV0bVZTuI9o3g7wQZSneJ2l1VZresWrO8S6UYgzxlWZrKyuazlNqVfgtQ9Sqepj82od3c3tw4mTafJtPZlreL6SMlPTU6x18v6+S25dcwQEBAQEBAQEBAQEBAQEBAp7nT0r012KKnqUBh2Go2BY+A1R9qUNTfe23g7Dgmn9Hg9JPW3yjp+eSGFJXbndztKDM6qoxYsFUcWYhVHmR5T2IYZLRWszPT6d76D0Jo1ba3pUE2IgBPpNtZvEknxm0pXs1iHz/UZ5z5bZLd73TJCQEBAQECAc6nJcVqPwukvxtJeuBtemNvey5kdmI4Svnx7x2objhOs9Hf0V+k9PZP8AanCsp7ulmrlb1SjAgkYHEEZEHcR2z1jWduU9H0NyQ00Lu0pVvn4atQcHXI+ByYdjCX8d+1Xdx+t03+Pmmnd1jybqSKhAQEBAQEBAQEBAQEBA6L66WlSqVW+SiM57lBPunlp2jdnixzkvFI6zOz57rVWd2dvlO5dvrMSzesmamZ3nd9ErWKVitekco8odZEPUp5ttH9LfoSMqStVPDEYInrcn+WT6eu92o4zm9Hp5iO/l9Z+XxXNNg44gICAgICAIgUBy40F8EvalNRhTb4yl2IxPV/lII7tXjNdlp2LbO00Gp/yMEWnrHKfPx/n57o66zCFm1VgczumNS4e2Y9Wqusv+Yn5rj9gSxp7bW28Wn4xh7eGMsda8p8p/v5rhlxzRAQEBAQEBAQEBAQEBAi3OVd6mj6gBwNR0pjuLazD7KtINRO1G14Nj7eriZ7t5+3x2U4BNe7MIh4snmhtepdVsNrpSHcgLn/6eqXdLHKZcxx7JvelPOfp9Fhy058gICAgICAgQXnb0T0lmtcDrUHxP1HwVh4HUP8plfUV3rv4NxwXP2M/o56W+cdPrCnMJRdVs7tFXxt7ilWXbTqK+HEKcx4jEeMzidpiVbJijJW2Of9o2fStKoGUMDiCAQeIOYmzcPMbTtLlDwgICAgICAgICAgICBXvO9X6lrT4u7/ZAUf7zKuqnlEOh4BWO1kt7Ij38/orlRKezo5tDrqNh/Qw9iy4ebK2KaOpkjAvUqP4axVfUomwwRtRxvF7xfVTt3bfLdK5M1hAQEBAQEBA82k7Na1GrRbZUpsh/mBHvnlo3jZJiyTjvW8dYmJfN70mUlWyZSVYcCpwI8wZqnfxMWjeOk83RVEyhFkjbmv7m+vum0bbNjiVToz/pkp7AD4y/hnekOP4lj7GpvHjz9/NIpKokBAQEBAQEBAQEBAQKx523+PthwpOfNl/KUtV1h1H/AB+P08k+2Pqi6JRCglsSU2EnANhkOquzHftGEhiKtpa2aZ2iO/4fzPVqrthi2rszw7t0wnqtU37Mb9V6ckUwsrcfQ9pJmzx/thwmunfUWbeZqhAQEBAQEBAQKG5d2HR6RulAODVOkGAP94A5+8WmuzV2vLtuG5fSaWk+Ebe7l8tkdq0zwkcLdo3WzzL3JNpXQ/MuMR2BkX3qZd008phzHGq/qUt4xt7pWFLDSkBAQEBAQEBAQEBAQKr53F/irc47aBHk5/OUdV+6HU8A3nDePb9EKZWxCnEHLI4D5WBGPDaJXbvrG+/57nC/s2TV1/nA5BjiMMMQwGw57O+ezEwxxXrk37MzyXpyOfGwtT/gL7JssX7IcRro21N49stxM1QgICAgICAgIFf8rOTlrc6UQXKsUaxLALUani1OoBmVIJ6r+qQzWJyc/Bsq5r10XqzMbX+cf08OntBaKo2Nx0VOklVaTahaprviDrYKWJ255DjPckV7Ew94fly21VLTMzvPP5c3m5lbj427p8URvIke8SHTTzmGw43WJx0n2z8Vry25wgICAgICAgICAgICBWHPHS69o3FKq+umfeZS1cc4/l1H/Hberkj21+qFXN6rOxCJ1jiSy4ka3ygeOBJHbhK82iZ6Nzjw2rWI3nl7fDp73kvaoepUcDAM7EdxJwx7Zjad5mUuKk0pWs90Qu7m/q62jbU8EZfsuy+6bLDO9IcRxSvZ1d4/OiQyVQICAgICAgICBXXOxZh6lmSQvUrjE7P7o59mRlXURvMfy33Br9muTlvzr9UAq6PoICWqK+Wylq47t57+Er9mI726jNlvyisx5pFzMn+NrD/1j6npyXT/ALv4a7jUfoR/9fSVxS65ggICAgICAgICAgICBAOeGhjb27+jXKnudGPtUSpq49WJdB/x6+2W9fGPlP8AaqTKTqhDmO8T0XLzW1cbEp/269RPMhvxGX9NPqOM43TbVb+MR9kwlhqCAgICAgICAgVxzwEfwg/zT5dH+cqarudBwGP/ACT5fVWtUZSq6FMOZpf42ueFufW9OWNP+7+Gm41P6Ef/AF9JXDLrlyAgICAgICAgICAgIEX5yrXX0bXw2oUqeCuNb7paQaiN8ctpwbJ2NZXfv3j3xy+KkTNc7ZxYz0WhzbaSp0mu0qOqKQlUF2CjMFWzPbhLemtEbxLmuOYLXmlqxvPOEnq8uNGqcDd0z9XFh5qCJY9LTxaaOH6mf9Jeqx5UWNY6tO6osx2LrqGPcpznsZKz0lHfSZ6Rvak+5t5mrkBAQEBAQKu54Kvx1qvo0qh+2yD8Ep6rrDpeBR+nefbHw3+6u6j5Ss3ie8ytPGtdNwpoPtMT+GWdN+6Wi45P6dI9srYlxzZAQEBAQEBAQEBAQEDz6QtRVo1aTbHpsh7mBHvnlo3jZJiyTjvW8d0xPufOT0ypKtkykq3YRkR5ial9FiYmN46S4MIGy0hSxpK3+GD4qMfPAtM0Fp23aB24T1WtM9zCnHbEw9rZJ+TvLC8tSAlQvTH93VJZcOCk5p4HDsMyrltVBn4fg1Ec42nxj85rc5K8sbe9GqvxdYDFqTnPtKH569oz4gS5jyxdzWs4fl007zzr4/nRI5KokDVcoeUFvZ0+krNmfkIuBdzwUe/YN8wveKRvKzpdJl1N+zjjznujzVZprnEvqxPQkW6bggDOfrOw9gEqW1Fp6cnS6fguDHHr+tPuj3NTQ5Z6SpnEXTnscI4Pgw9kwjNeO9NfhmmtG3Yj+N3n5Q8oqt7UWrVChlpBOpiAcCx1sCTgTrbMd08vebTvLPSaWunpNaeO/P8APY0pqTxNN1tcy1D+HuanGqq/ZXW/HLWmjlLnuN29alfZM++f6WNLLRkBAQEBAQEBAQEBAQECiOXVj0WkLlQMmqdIP9Qa5+8W8prM1dry7vhmX0ulpPhG3u5fLZHyJGvN+E+KXLEqqnyGY8RiPGZ9yCeqI3QC1Wp9uK9qnNSDvy9hmWyl2vW7M9XYqzxNHtdqUm3An2/rMZSxExzh6rKp1lZSVZSCrKcCCNhBGwzKGU9m9ZiecSuXkPyrNwOhr4Cuq4g7BVUbWA3ON48RvAu4sva5T1clxLh/+PPbp+2fg2/KfT9OzoGo/WYnVpoDgXbh2AbSdw8JnkvFI3VdHpL6rJ2K9O+fCFKaSv3rVWr3L6znwCjcqjco4e04ma+Zm07y7PFix4KdjHG0R+by66dZGy1SOBIynm6WN+sNfcpgTGxMuFmms2Hb7QfyEbMKztZw0rZFOsP6jf4/rPY8Eeeu8dqq6uaahq6NU+nVZj4YJ+GXNPHqOY4xbfUbeER9/qmUnaogICAgICAgICAgICAgVLzsUl+G02G02y4juepgfb5Shqo9f+HXcBtM6aY/9p+UIWlAsQBvOErw3UzskOphJNlbdFuU2jtcdXJ1xKfSXaU7wcx3z2ltp2lBqsE3jt16tVou+D9VsnGWe/D39kytTbmj0+eL+rPVIrOnMF2eT1XOjC3XQdfh6fYfp8Dv2HcZ7EIpttO7v0bWJ1XQlXVgyMNqsuw4eojeCQds9jlzh5krW9ZrbnEs8qNOVLiqa1bAELqIgJIQDbh3nPHu4CL2m87yw0mnppsXYr5zPiil1edY47fUvYO3tnm272+Xafzk6bO4dnBTMA9YnZ2jtiYiI5scV8l7er/Mttf7TPFpw0V/aDvA9v5RCKJ5t/fWuuoG/rEeFNz7p7MbnpOzzWLzV3ANj0e+lWdSPrYOD97DwlvTz6mzmuNY+zqe13TEfb6JjJ2oICAgICAgICAgICAgIFPcu6nSX1c7lK0x3Kox+8Wmu1E73l2nB6djS19u8/nuaO3r0aRJc9bgM8P1kccl3JvblD0rpmgd5HeJl2oRxjt4vBpoqyBlIODDMTGeqWN4jmjN7o8VM1yfy1v1mdbzHLuVc2njJ60crfN6NB6YKuKdbLPDE7R9b85lMd8MMWef2ZOqwLOmCOIInsQZLbPHpO26OoKo2OwFT6x+S/8ANsP0sD86LR3mK+/q+77fb+mo5R0uqKg3bfLI/vgJhKaZ9XfwQzVLuqDftPADb++2Z9I3UdpyXikd/wAkmtKARQAMABIN5mW5rWuOu0dHVevJZQTPJ2aDXr4958hgP9x8p5COEooprFR9Fz502pj71RZnHVDlnaPd89/ok3IxjRv2QfIr02y+nT6yn7Jf1SXFyvt4tbxSIyaeL99Z+E/kLElpzhAQEBAQEBAQEBAQEBAorlbdFa9yBtN3WGPABzj45iazJ+6fN3eij/8APj2/6x8kZCzDdbij0Cyf0T45HyOcbSwi+Oek/nn0dRUjEHxE8SbRLodMM5lEoL1mvNwvLMV0JH9qoxH0wNo+sP3vmdZ2Vs+OMkbx1bvm/wBOa2NvUPWAxQneBtX99sl6K0Wm9efWExu1VkZW2FSDhtwO3DtGRHaoiSsTvyRa6BNJ6b/KGKt3jEYjsy9chnk2NYi0ecIfoQYu7dyj2n2zLJ0iFPRRve1v4b81N3iZhSO9sMlto2a+5fEzOVa09zYaNyHq8B+uJ8Z4krHJJtENi+PABfAEVG9YoTOvVW1Ed35+dUi0C+tpK1UfNSo7dxRkHrktOd4a7W+rpb79+0fHdZEtObICAgICAgICAgICAgIFH84dgaekKwOx26Ve51XH7yv5TXaiNru24Pki+lj2cvz+GkteqwYbRmp4MNh8NveBIqztO7YZaReOzbpPXySm90TRrj4Y1dKFOqASNXXIqnEVFABG9Sd+0y1bHW/r77RPzaHBrc2nn/EjHN7V379vV6xPSe6fkjumNFtSC1FdatJjgtSn8kkbVYbVbsP5yC+Ps8+seLaabW1zWmkxNbx1rPz9sNWp/fuka5ytDpfFHDKfpKfcfZ/WZqdo7M7S8Ok26G6pXFPIOQ4w3MD1x5+2TV512Uc0ejyxbun8lYSaQDKGG8A+cx7S16NqL+rgzHioPkNX8MjstYo2hFtF0mTWxHzsRmDuHDumdvWU9NWce+72Va2E96JrW73RTzMwYV5y2Nu+H728BG6ykOjKmouZ8fElj4knwAmVVfJG8pZzV0TVq3V4fk5UafdkzYeAQ97GT4I3mbNHxjLEVrijzn5R9Vjy00JAQEBAQEBAQEBAQEBAhXOdoE16Ar0xjUogkgbWpnNu8rt7tbjK+px9qu8dzc8F1kYc3o7dLfCe77KlV8pr3YS2dhe02pPb1mKIzipTqYFuiqAavWUbUYHA4bNvaJ6Wia9izX6nDkrljU4Y3mI2mOnar15T4x+eE+w2tOhZXYe4o1TV1OiWi+v1kbHX3EHjlsXbJOzFMcxMxO6jbLk1GsxWpjtXs79qbRtynu+3n0Remu093v8AylaW6rPrbFyvUJ4HHwOR/D5T2ssNRHKJajTRxt1+jWy7mU4/7ZNi/c12sjfFE+36JBYXHxSYn5sjXqR6sMXD6+IHDD1k++IjeWVp7NXiqYLsmfRBu8jnEzFHPOXdRWeJaQ91ouJHAfvGedeSaZ2jd7itStUp2tAa1SodUDcB28BhiTwAPZM4iZ5QqZclcdZtbpHVevJ/RKWttSt0zCLmd7Mc2Y9pJJl+lezGzj9RntmyTkt3tjMkJAQEBAQEBAQEBAQEBAQKq5dch2pu1xbLjTOLOg20zvKj0PZ3bKObDt61ejq+F8VjJEYs0+t3T4+ft+fn1gVSiw2iVolvdmEt8d58v1nu7yYl3rb8Bl+855M7va125urSKatM4/OIA8w34fXPaQh1FuUQ0F6uv0dPdra7dgGQ9pk1Z23lQyx2+zT27z+e9vdE6Pr3D9HQptUYKWIXco3k+ocTsmFazadoT5NRjxVibztHRwquF1lzBBwIIIIO8EHMHsMyjkztaJ5tfVqQhtZxSePId6tPE8S9ejaNatUFG3Q1KjbFXcN7MdigcTlMq1meUIs2emOvatP5+dy6uQnIxLFC7kVLhx133KDnqJjux2nacOwAXMePs9erltbrZ1E7RyrHx9s/nJLJKoEBAQEBAQEBAQMEwMa8DHSQMdLAwa4gcTciBwN6sCI8oOTdvVJekRSc5kEY027wM1PaMuwyDJp625w2+k4xlwx2b+tHxj+fuhV9oupRx16RIHzqRWoPIdfzUStOntHc3mPi+nv/ALbefL+vi1VTSSDJKNZzuHRsB44iYxinwS212L/vHvh1Lyev7lwzUwg3a7qoA7sS3qksYb+Chk4lg33m3u3n896QaK5tkxxr3Iz2iiuf23/4ySNP4ypZOMRH/jr/ADP2j7rC0LaW9rT6O3QIu0nMsx4sxzYyetIrG0NTn1GTNbtXnd49P6FtbvOtRRmwwDglH7BrrmR2HERbHW3WGWHVZcP7J5eHch93zYUycaVZl7HwceoAyKcEd0rteLZP9qxPw+7qp81zb7geCYe0mef48eLOeMW25Uj3vZbc2NMEF6ruPRxC495UA+REyjT1R24vnmNoiI9/3TjQej6drT6OhSp0136gOLHizHEse8yWKxXo1+XNfLO953bZbgz1G7BXgchWgculgZ6SBkNA5QEBAQEDBEDGrAxqQMakDiacDiaIgcDbDhA4GzXgIHA2CeiIHE6PT0RAx/8Amp6IgBo9fREDkLMcIGfgo4QM/BoGRbwOQoQOQoQOQowOQpQOQpwM6kDOrAyFgcoCAgICAgICAgIGIGIGDAQEDEBAxAQEDMDIgIGYGYGYCAgICAgIH//Z" alt="A Book"
                />
                <Product
                    id="987654321"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at blandit lacus. Aliquam convallis orci eget mollis feugiat. Curabitur finibus erat nec orci hendrerit, ac."
                    price={100.95}
                    rating={4}
                    image="https://www.sony.com/image/900a12699a1cee214f01139c98e08fce?fmt=pjpeg&resMode=bisharp&wid=354" alt="A Book"
                />
            </div>
            <div className="home__row">
                <Product
                    id="987654321"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at blandit lacus. Aliquam convallis orci eget mollis feugiat. Curabitur finibus erat nec orci hendrerit, ac."
                    price={350}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eF2OOkaR--RsiMYIawwVrrBd2KLX7JYliw&usqp=CAU" alt="A Book"
                />
                <Product
                    id="987654321"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at blandit lacus. Aliquam convallis orci eget mollis feugiat. Curabitur finibus erat nec orci hendrerit, ac."
                    price={500.50}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpG9XUUrb2tzGE8fmbXH5PjH_Ma6a5gQTDAw&usqp=CAU" alt="A Book"
                />
                <Product
                    id="987654321"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at blandit lacus. Aliquam convallis orci eget mollis feugiat. Curabitur finibus erat nec orci hendrerit, ac."
                    price={10.95}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47zv_n2HeNa-dEnC8mKsSUixC-upz6stJ8g&usqp=CAU" alt="A Book"
                />
            </div>
            <div className="home__row">
                <Product
                    id="987654321"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at blandit lacus. Aliquam convallis orci eget mollis feugiat. Curabitur finibus erat nec orci hendrerit, ac."
                    price={710.95}
                    rating={4}
                    image="https://www.apple.com/v/product-red/i/images/og_product-red.png?201811300738" alt="A Book"
                />

            </div>
            {/* Product */}
        </div>



    );
}

export default Home
