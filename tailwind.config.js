/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts}"],
    mode: 'jit',
    theme: {
        container: {
            center: true,
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1170px',
                '2xl': '1320px'
            }
        },
        fontFamily: {
            'sans': ['Onest', 'system-ui'],
            'serif': ['Inter', 'system-ui'],
        },        
        extend: {
            fontSize: {
                xs: '0.8rem',
                sm: '0.8rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.625rem',
                '5xl': '2.875rem',
            },
            backgroundImage: {
                'scroller' : "data:image/svg+xml,%3Csvg class='scroller__thumb' width='34' height='23' viewBox='0 0 34 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5254 1.90473L20.5254 21.0303C20.5254 21.4005 20.6655 21.7205 20.9456 21.991C21.2259 22.2614 21.5577 22.3965 21.9413 22.3965C22.3249 22.3965 22.657 22.2614 22.9372 21.991L32.851 12.4282C33.1313 12.1574 33.2717 11.8374 33.2717 11.4675C33.2717 11.0975 33.1313 10.7772 32.851 10.507L22.9371 0.944164C22.657 0.674044 22.3249 0.538422 21.9413 0.538422C21.5577 0.538422 21.2259 0.673969 20.9455 0.944164C20.6652 1.21436 20.5254 1.53472 20.5254 1.90473Z' fill='white'%3E%3C/path%3E%3Cpath d='M13.4961 1.90473L13.4961 21.0303C13.4961 21.4005 13.356 21.7205 13.0759 21.991C12.7956 22.2614 12.4637 22.3965 12.0802 22.3965C11.6966 22.3965 11.3645 22.2614 11.0843 21.991L1.17049 12.4282C0.890143 12.1574 0.749775 11.8374 0.749775 11.4675C0.749775 11.0975 0.890143 10.7772 1.17049 10.507L11.0844 0.944164C11.3645 0.674044 11.6966 0.538422 12.0802 0.538422C12.4637 0.538422 12.7956 0.673969 13.076 0.944164C13.3563 1.21436 13.4961 1.53472 13.4961 1.90473Z' fill='white'%3E%3C/path%3E%3C/svg%3E",
                'progressBar' : 'linear-gradient(' +
                        '-45deg,' +
                        'rgba(255, 255, 255, 0.1) 25%,' +
                        'transparent 0,' +
                        'transparent 50%,' +
                        'rgba(255, 255, 255, 0.1) 0,' +
                        'rgba(255, 255, 255, 0.1) 75%,' +
                        'transparent 0,' +
                        'transparent' +
                ')'
            },
            keyframes: {
                slideinright: {
                    '0%': {
                        'max-height': 'unset',
                        'transform': 'translateX(-15%)',
                        'opacity': '0'
                    },
                    '50%': {
                        'transform': 'translateX(0)'
                    },
                    '100%': {
                        'max-height': 'unset',
                        'transform': 'translateX(0)',
                        'opacity': '1',
                        'pointer-events': 'all'
                    },
                },
                slideinleft: {
                    '0%': {
                        'max-height': 'unset',
                        'transform': 'translateX(15%)',
                        'opacity': '0'
                    },
                    '50%': {
                        'transform': 'translateX(0)'
                    },
                    '100%': {
                        'max-height': 'unset',
                        'transform': 'translateX(0)',
                        'opacity': '1',
                        'pointer-events': 'all'
                    },
                },
                strokeCheck: {
                    '100%': {
                        'stroke-dashoffset': '0'
                    }
                },
                scaleCheck: {
                    '0%, 100%': {
                        'transform': 'none'
                    },
                    '50%': {
                        'transform': 'scale3d(1.1, 1.1, 1)'
                    },
                },
                fillCheck: {
                    '100%': {
                        'box-shadow': 'inset 0px 0px 0px 3.5rem currentColor'
                    },
                },
                moveProgress: {
                    '0%' : {
                        'background-position' : '0 0'
                    },
                    'to' : {
                        'background-position' : '50px 50px'
                    },
                },
                flipTop: {
                    '0%' : {
                        'transform' : 'rotateX(0deg)',
                        'z-index' : '2'
                    },
                    '0%,99%' : {
                        'opacity' : '0.99'
                    },
                    '100%' : {
                        'transform' : 'rotateX(-90deg)',
                        'opacity' : '0'
                    },
                },
                flipBottom: {
                    '0%, 50%' : {
                        'transform' : 'rotateX(90deg)',
                        'z-index' : '-1',
                        'opacity' : '0'
                    },
                    '51%' : {
                        'opacity' : '0.99'
                    },
                    '100%' : {
                        'opacity' : '0.99',
                        'transform' : 'rotateX(0deg)',
                        'z-index' : '5'
                    },
                },
                marquee: {
                    'from' : {
                        'transform' : 'translateX(0)',
                    },
                    'to' : {
                        'transform' : 'translateX( calc(-100% - 20px ))',
                    },
                }
            },
            animation: {
                'slideinright': 'slideinright 0.6s forwards',
                'slideinleft': 'slideinleft 0.6s forwards',
                'fillcheck': 'fillCheck 0.6s ease-in-out 0.4s forwards, scaleCheck 0.3s ease-in-out 0.9s both',
                'strokecheck': 'strokeCheck 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards',
                'tickcheck': 'strokeCheck 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards',
                'progressbar' : 'moveProgress 5s linear infinite',
                'fliptop' : 'flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35) both',
                'flipbottom' : 'flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1) both',
                'marquee' : 'marquee 30s linear infinite',
                'marqueereverse' : 'marquee 30s linear infinite reverse',
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}