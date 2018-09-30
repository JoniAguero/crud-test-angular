import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('HeaderComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    xit('navs cointain /posts', () => {
        fixture = TestBed.createComponent(NavbarComponent);
        const navs = fixture.debugElement.queryAll(By.directive( RouterLinkWithHref ));
        console.log('navs', navs);
        let existe = false;
        for (const nav of navs) {
            if (nav.attributes['routerLink'] === '/posts') {
                existe = true;
                break;
            }
        }
        expect(existe).toBeTruthy();
    });

});
