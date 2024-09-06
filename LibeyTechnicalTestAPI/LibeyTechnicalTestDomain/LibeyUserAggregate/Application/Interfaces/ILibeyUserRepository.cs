using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces
{
    public interface ILibeyUserRepository
    {
        List<LibeyUserResponse> GetAll(string filtro);
        LibeyUserResponse FindResponse(string documentNumber);
        void Create(LibeyUser libeyUser);
        void Update(LibeyUser libeyUser);
        void Delete(string documentNumber);
    }
}
