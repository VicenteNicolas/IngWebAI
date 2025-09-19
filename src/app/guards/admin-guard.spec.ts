import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin-guard';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminGuard]
    });
    guard = TestBed.inject(AdminGuard);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });


  it('debería permitir acceso si el usuario es admin', (done) => {
    localStorage.setItem('user', JSON.stringify({ role: 'admin' }));

    guard.canActivate().subscribe(result => {
      expect(result).toBeTrue();
      done();
    });
  });

  it('debería bloquear el acceso si no es admin', (done) => {
    localStorage.removeItem('user');

    guard.canActivate().subscribe(result => {
      expect(result).toBeFalse();
      done();
    });
  });
});
